import React, {Component} from 'react';
import {NativeEventEmitter} from 'react-native';
import {
  CONNECTIONSTRING,
  HUBNAME,
  TAGS,
  SENDERID,
  CHANNELNAME,
  CHANNELIMPORTANCE,
} from '../config/PushConfig';
// import {Text, TouchableOpacity, View} from 'react-native';

const NotificationHub = require('react-native-azurenotificationhub');
const PushNotificationEmitter = new NativeEventEmitter(NotificationHub);

const EVENT_AZURE_NOTIFICATION_HUB_REGISTERED =
  'azureNotificationHubRegistered';
const EVENT_AZURE_NOTIFICATION_HUB_REGISTERED_ERROR =
  'azureNotificationHubRegisteredError';
const EVENT_REMOTE_NOTIFICATION_RECEIVED = 'remoteNotificationReceived';

const connectionString = CONNECTIONSTRING;
const hubName = HUBNAME;
const senderID = SENDERID;
const tags = TAGS;
const channelName = CHANNELNAME;
const channelImportance = CHANNELIMPORTANCE;

const channelShowBadge = true;
const channelEnableLights = true;
const channelEnableVibration = true;

export default class App extends Component {
  constructor(props: any) {
    super(props);
    PushNotificationEmitter.addListener(
      EVENT_REMOTE_NOTIFICATION_RECEIVED,
      this._onRemoteNotification,
    );
  }

  register() {
    PushNotificationEmitter.addListener(
      EVENT_AZURE_NOTIFICATION_HUB_REGISTERED,
      this._onAzureNotificationHubRegistered,
    );
    PushNotificationEmitter.addListener(
      EVENT_AZURE_NOTIFICATION_HUB_REGISTERED_ERROR,
      this._onAzureNotificationHubRegisteredError,
    );

    NotificationHub.register({
      connectionString,
      hubName,
      senderID,
      tags,
      channelName,
      channelImportance,
      channelShowBadge,
      channelEnableLights,
      channelEnableVibration,
    }).catch((reason: any) => console.warn(reason));
  }

  unregister() {
    NotificationHub.unregister().catch((reason: any) => console.warn(reason));
  }

  _onAzureNotificationHubRegistered(registrationID: any) {
    console.warn('RegistrationID: ' + registrationID);
  }

  _onAzureNotificationHubRegisteredError(error: any) {
    console.warn('Error: ' + error);
  }

  _onRemoteNotification(notification: any) {
    console.warn(notification);
  }
}

/*
render() {
  return (
    <View>
      <TouchableOpacity onPress={this.register.bind(this)}>
        <View>
          <Text>Register</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.unregister.bind(this)}>
        <View>
          <Text>Unregister</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
 */
