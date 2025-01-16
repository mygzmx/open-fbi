const ClientConfig = {
  fbAppId: "310390558121791",
  name: "DramaBox",
  ios: {
    // deeplink: "dramabox://open?bid=41000101854&cid=564421029&chid=DASEO1000000&media=fb",
    universalLink: "https://app.dramaboxdb.com/ios/open?c=",
    pname: "com.storymatrix.drama",
    link: "https://apps.apple.com/us/app/id6445905219",
    channelCode: "DISEO1000000",
  },
  android: {
    pname: "com.storymatrix.drama",
    link: "https://play.google.com/store/apps/details?id=com.storymatrix.drama",
    channelCode: "DASEO1000000",
  },
  logDataType: "dramabox",
  logType: "seo_dramaboxapp",
}

export default ClientConfig;
