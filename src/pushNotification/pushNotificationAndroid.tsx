import React, { Component } from 'react';
import { NativeEventEmitter } from 'react-native';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const NotificationHub = require('react-native-azurenotificationhub');
const PushNotificationEmitter = new NativeEventEmitter(NotificationHub);

const EVENT_AZURE_NOTIFICATION_HUB_REGISTERED           = 'azureNotificationHubRegistered';
const EVENT_AZURE_NOTIFICATION_HUB_REGISTERED_ERROR     = 'azureNotificationHubRegisteredError';
const EVENT_REMOTE_NOTIFICATION_RECEIVED                = 'remoteNotificationReceived';

const connectionString = '...';       // The Notification Hub connection string
const hubName = '...';                // The Notification Hub name
const senderID = '...';               // The Sender ID from the Cloud Messaging tab of the Firebase console
const tags = [ ... ];                 // The set of tags to subscribe to
const channelName = '...';            // The channel's name
const channelImportance = 3;          // The channel's importance (NotificationManager.IMPORTANCE_DEFAULT = 3)
                                      // Notes:
                                      //   1. Setting this value to 4 enables heads-up notification on Android 8
                                      //   2. On some devices such as Samsung Galaxy, changing this value requires
                                      //      uninstalling/re-installing the app to take effect.
const channelShowBadge = true;
const channelEnableLights = true;
const channelEnableVibration = true;

export default class App extends Component {
  constructor(props) {
    super(props);
    PushNotificationEmitter.addListener(EVENT_REMOTE_NOTIFICATION_RECEIVED, this._onRemoteNotification);
  }

  register() {
    PushNotificationEmitter.addListener(EVENT_AZURE_NOTIFICATION_HUB_REGISTERED, this._onAzureNotificationHubRegistered);
    PushNotificationEmitter.addListener(EVENT_AZURE_NOTIFICATION_HUB_REGISTERED_ERROR, this._onAzureNotificationHubRegisteredError);

    NotificationHub.register({
      connectionString,
      hubName,
      senderID,
      tags,
      channelName,
      channelImportance,
      channelShowBadge,
      channelEnableLights,
      channelEnableVibration
    })
    .catch(reason => console.warn(reason));
  }

  unregister() {
    NotificationHub.unregister()
      .catch(reason => console.warn(reason));
  }

  render() {
    return (
      <View >
        <TouchableOpacity onPress={this.register.bind(this)}>
         <View>
           <Text >
             Register
           </Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={this.unregister.bind(this)}>
         <View>
           <Text>
             Unregister
           </Text>
         </View>
       </TouchableOpacity>
      </View>
    );
  }

  _onAzureNotificationHubRegistered(registrationID) {
    console.warn('RegistrationID: ' + registrationID);
  }

  _onAzureNotificationHubRegisteredError(error) {
    console.warn('Error: ' + error);
  }

  _onRemoteNotification(notification) {
    console.warn(notification);
  }
}
