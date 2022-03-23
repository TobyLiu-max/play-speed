let num = 1

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    sendResponse({code:200});
    let testNotify = { type: 'basic', iconUrl: 'images/get_started16.png', title: '提示', message: "设置播放速度失败,没有找到控制器" };
    // 弹出设置失败的提示
    chrome.notifications.create('set' + num++, testNotify, function (notificationId) {
      console.log('did this work');
    });
  }
);