// IOS and Android Config

// The Notification Hub connection string
export const CONNECTIONSTRING =
  'Endpoint=sb://ambassadorhub.servicebus.windows.net/;SharedAccessKeyName=DefaultListenSharedAccessSignature;SharedAccessKey=UZOHxmdkPy2fKmHZBGrtlCZ3oK2CS+WDMtbB2MBhnKQ=';
// The Notification Hub name
export const HUBNAME = 'AmbassadorHub';
// The set of tags to subscribe to
export const TAGS = [];

// Android Only

// The Sender ID from the Cloud Messaging tab of the Firebase console
export const SENDERID = '786991888574';
// The channel's name
export const CHANNELNAME = '';

// The channel's importance (NotificationManager.IMPORTANCE_DEFAULT = 3)
// Notes:
//   1. Setting this value to 4 enables heads-up notification on Android 8
//   2. On some devices such as Samsung Galaxy, changing this value requires
//      uninstalling/re-installing the app to take effect.
export const CHANNELIMPORTANCE = 3;
