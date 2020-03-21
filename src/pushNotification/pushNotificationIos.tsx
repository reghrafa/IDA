import React, { Component } from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const NotificationHub = require('react-native-azurenotificationhub/index.ios');

const connectionString = '...'; // The Notification Hub connection string
const hubName = '...';          // The Notification Hub name
const tags = [ ... ];           // The set of tags to subscribe to

let remoteNotificationsDeviceToken = '';  // The device token registered with APNS

export default class App extends Component {
  requestPermissions() {
    // register: Fired when the user registers for remote notifications. The
    // handler will be invoked with a hex string representing the deviceToken.
    NotificationHub.addEventListener('register', this._onRegistered);

    // registrationError: Fired when the user fails to register for remote
    // notifications. Typically occurs when APNS is having issues, or the device
    // is a simulator. The handler will be invoked with {message: string, code: number, details: any}.
    NotificationHub.addEventListener('registrationError', this._onRegistrationError);

    // registerAzureNotificationHub: Fired when registration with azure notification hubs successful
    // with object {success: true}
    NotificationHub.addEventListener('registerAzureNotificationHub', this._onAzureNotificationHubRegistered);

    // azureNotificationHubRegistrationError: Fired when registration with azure notification hubs
    // fails with object {message: string, details: any}
    NotificationHub.addEventListener('azureNotificationHubRegistrationError', this._onAzureNotificationHubRegistrationError);

    // notification: Fired when a remote notification is received. The
    // handler will be invoked with an instance of `AzureNotificationHubIOS`.
    NotificationHub.addEventListener('notification', this._onRemoteNotification);

    // localNotification: Fired when a local notification is received. The
    // handler will be invoked with an instance of `AzureNotificationHubIOS`.
    NotificationHub.addEventListener('localNotification', this._onLocalNotification);

    // Requests notification permissions from iOS, prompting the user's
    // dialog box. By default, it will request all notification permissions, but
    // a subset of these can be requested by passing a map of requested
    // permissions.
    // The following permissions are supported:
    //  - `alert`
    //  - `badge`
    //  - `sound`
    //
    // returns a promise that will resolve when the user accepts,
    // rejects, or if the permissions were previously rejected. The promise
    // resolves to the current state of the permission of
    // {alert: boolean, badge: boolean,sound: boolean }
    NotificationHub.requestPermissions();
  }

  register() {
    NotificationHub.register(remoteNotificationsDeviceToken, {connectionString, hubName, tags});
  }

  unregister() {
    NotificationHub.unregister();
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.requestPermissions.bind(this)}>
         <View >
           <Text >
             Request permission
           </Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={this.register.bind(this)}>
         <View >
           <Text>
             Register
           </Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={this.unregister.bind(this)}>
         <View >
           <Text >
             Unregister
           </Text>
         </View>
       </TouchableOpacity>
      </View>
    );
  }

  _onRegistered(deviceToken) {
    remoteNotificationsDeviceToken = deviceToken;
    Alert.alert(
      'Registered For Remote Push',
      `Device Token: ${deviceToken}`,
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _onRegistrationError(error) {
    Alert.alert(
      'Failed To Register For Remote Push',
      `Error (${error.code}): ${error.message}`,
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _onRemoteNotification(notification) {
    Alert.alert(
      'Push Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _onAzureNotificationHubRegistered(registrationInfo) {
    Alert.alert('Registered For Azure notification hub',
      'Registered For Azure notification hub'
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _onAzureNotificationHubRegistrationError(error) {
    Alert.alert(
      'Failed To Register For Azure Notification Hub',
      `Error (${error.code}): ${error.message}`,
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _onLocalNotification(notification){
    // Note notification will be object for iOS
    Alert.alert(
      'Local Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }
}
