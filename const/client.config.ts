const ClientConfig = {
  fbAppId: "310390558121791",
  name: "DramaBox",
  companyName: "STORYMATRIX PTE.LTD.",
  productName: "db",
  googleCode: "G-BXDJ8KNG7N",
  email: "feedback@dramabox.com", // "dramaboxapp@gmail.com",
  hrEmail: "hr@dramabox.com",
  ios: {
    // deeplink: "dramabox://open?bid=41000101854&cid=564421029&chid=DASEO1000000&media=fb",
    universalLink: "https://app.dramaboxdb.com/ios/open?c=",
    pname: "com.storymatrix.drama",
    link: "https://apps.apple.com/us/app/id6445905219",
    channelCode: "DISEO1000000",
    BChannelCode: "DISEO1000001",
  },
  android: {
    pname: "com.storymatrix.drama",
    link: "https://play.google.com/store/apps/details?id=com.storymatrix.drama",
    channelCode: "DASEO1000000",
    BChannelCode: "DASEO1000001",
  },
  logDataType: "dramabox",
  logType: "seo_dramaboxapp",
  netHiveLink: "https://log.dramaboxdb.com/h5_stand_final_log.php"
}

export default ClientConfig;
