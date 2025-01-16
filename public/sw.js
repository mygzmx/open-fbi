// dir: 显示通知的方向。默认是auto，跟随浏览器语言设置行为，你也可以通过设置ltr和rtl的值来覆盖该行为（虽然大多数浏览器似乎忽略这些设置）
// lang: 通知的语言，如使用代表一个BCP 47语言标签的  DOMString 指定的。请参阅Sitepoint ISO 2字母语言代码页面，以获得简单的参考。
// badge: 一个 USVString 包含用于表示通知的图像的URL, 当没有足够的空间来显示通知本身时。
// body: 一个 DOMString 表示通知的正文，将显示在标题下方。
// tag:  一个 DOMString 代表通知的 一个识别标签。
// icon:  一个 USVString 包含要在通知中显示的图标的URL。
// image: 一个 USVSTring包含要在通知中显示的图像的URL。
// data: 您想要与通知相关联的任意数据。这可以是任何数据类型。
// vibrate: 一个振动模式 vibration pattern 设备的振动硬件在通知触发时发出。
// renotify: 一个 Boolean 指定在新通知替换旧通知后是否应通知用户。默认值为false，这意味着它们不会被通知。
// requireInteraction: 表示通知应保持有效，直到用户点击或关闭它，而不是自动关闭。默认值为false。

self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: data.icon || '/images/logo.jpeg',
      badge: '/images/logo/logo-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
      },
    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

self.addEventListener('notificationclick', function (event) {
  console.log('Notification click received.')
  event.notification.close()
  event.waitUntil(clients.openWindow('https://www.dramabox.com'))
})
