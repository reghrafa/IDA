
declare module 'react-native-freshchat-sdk' {
    export type ConversationOptionsType = typeof ConversationOptions;
    export class ConversationOptions {
        constructor();
        tags: any;
        filteredViewTitle: any;
    }
    export interface IFreshchat {
        init: (freshchatConfig: FreshchatConfig) => void;
        showFAQs: (faqOptions: FaqOptions) => void;
        showConversations: (conversationOptions?: ConversationOptions) => void;
        resetUser: () => void;
        getUnreadCountAsync: (callback: any, tags: any) => void;
        setUser: (user: FreshchatUser, errorCallback: (error: any) => void) => void;
        setUserWithIdToken: (jwt: string, errorCallback: (error: any) => void) => void;
        getUser: (callback: any) => void;
        getSDKVersionCode: (callback: (version: any) => any) => void;
        setUserProperties: (userPropertiesJson: Object, error: (error: any) => void) => void;
        sendMessage: (freshchatMessage: FreshchatMessage) => void;
        identifyUser: (EXTERNAL_ID: string, RESTORE_ID: string, error: (error: any) => void) => void;
        restoreUserWithIdToken: (jwt: string, errorCallback: (error: any) => void) => void;
        getUserIdTokenStatus: (callback: any) => void;
        getFreshchatUserId: (callback: any) => void;
        dismissFreshchatViews: () => void;
        setNotificationConfig: (freshchatNotificationConfig: FreshchatNotificationConfig) => void;
        setPushRegistrationToken: (token: string) => void;
        isFreshchatNotification: (payload: any, callback: any) => void;
        handlePushNotification: (payload: any) => void;
        openFreshchatDeeplink: (link: any) => void;
        addEventListener: (type: any, handler: any) => void;
        removeEventListeners: (type: any) => void;
        transformPushNotificationIOSPayloadToNativePayload: (reactPayload: any) => void;
    }
    export class FreshchatUser {
        constructor();
        firstName?: string;
        lastName?: string;
        email?: string;
        phoneCountryCode?: string;
        phone?: string;
    }
    export class FreshchatNotificationConfig {
        constructor();
        notificationSoundEnabled: boolean;
        activityToLaunchOnFinish: any;
        largeIcon: any;
        smallIcon: any;
        priority: number;
        overrideNotificationClickListener: boolean;
        NotificationPriority: () => {
            "PRIORITY_DEFAULT": any;
            "PRIORITY_HIGH": any;
            "PRIORITY_LOW": any;
            "PRIORITY_MAX": any;
            "PRIORITY_MIN": any;
        }
    }
    export class FreshchatMessage {
        constructor();
        tag: any;
        message: string; // not shure if string or any
    }
    export class FreshchatConfig {
        constructor(appId: string, appKey: string);
        appId: string;
        appKey: string;
        domain: any;// = null;
        themeName: any;// = null;
        stringsBundle: any;// = null;
        teamMemberInfoVisible: boolean;// = true;
        cameraCaptureEnabled: boolean;// = true;
        gallerySelectionEnabled: boolean;// = true;
        responseExpectationEnabled: boolean;// = true;
        showNotificationBanner: boolean;// = true; //iOS only
        notificationSoundEnabled: boolean;// = true; //iOS only
    }
    export class FaqOptions {
        constructor();
        showFaqCategoriesAsGrid: boolean; // = true;
        showContactUsOnFaqScreens: boolean; // = true;
        showContactUsOnAppBar: boolean; // = false;
        showContactUsOnFaqNotHelpful: boolean; // = true;
        tags: string[]; // = null; //TODO: How can we force this to be an array always
        contactusFilterTags: any; // = null; //TODO: How can we force this to be an array always
        contactusFilterTitle: string; // = null;
        filteredViewTitle: string; // = null;
        filterType: any; // = null; //TODO: How to force enum type
        FilterType: () => {
            "CATEGORY": any;
            "ARTICLE": any;
        }
    }
    export const Freshchat: IFreshchat;
}