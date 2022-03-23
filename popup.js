
const input = document.querySelector('.input')
const startBtn = document.querySelector(".start-btn");


startBtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPlaySpeed,
    args: [input.value],
  });
});

function setPlaySpeed(value) {
  const video = document.querySelector('video')
  if(video && video.playbackRate){
    // 设置播放速度
    video.playbackRate = value || 1
  }else{
    console.error('设置播放速度失败')
    chrome.runtime.sendMessage({code: 500}, function(response) {
      console.log(response.code);
    });
  }
}