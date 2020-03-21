import { Colorstrings } from "./themes/EdubaoTheme";

export const DEBUG: boolean = true;

/**
 * GENERAL
 */
export const APP_VERSION: string = "0.0.1";

/**
 * API
 */
export const APP_ID: string = "69492cd7-301b-4da4-b911-ef1003d19ab4";
export const APP_KEY: string = "b16019f7-38ca-407a-a932-95b558204b4d";

/**
 * MAIN TAB BAR
 */
export const MAIN_TAB_BAR_ICON_COLOR: Colorstrings = "darkest";
export const MAIN_TAB_BAR_ICON_COLOR_HIGHLIGHTED: Colorstrings = "primary";

/**
 * NAVIGATION
 */

export interface INav {
  [key: string]: any;
}

export const NAVIGATION_PATH_FEED: string = "Feed";
export const NAVIGATION_PATH_BOOKMARK: string = "Bookmark";

export const NAVIGATION_PATH_FEED_NAVIGATOR: string = "FeedNavigator";
export const NAVIGATION_PATH_TODO: string = "Todo";
export const NAVIGATION_PATH_TODO_DETAIL: string = "TodoDetail";
export const NAVIGATION_PATH_CATEGORIES: string = "Categories";
export const NAVIGATION_PATH_CATEGORIES_DETAIL: string = "CategoriesDetail";
export const NAVIGATION_PATH_ARTICLE: string = "Article";
export const NAVIGATION_PATH_PROFILE: string = "Profile";
export const NAVIGATION_PATH_IMPRINT: string = "Imprint";
export const NAVIGATION_PATH_CHANGE_LANGUAGE: string = "ChangeLanguage";

export const NAVIGATION_PATH_PREMIUM: string = "Premium";
export const NAVIGATION_PATH_SERVICES_OVERVIEW: string = "ServicesOverview";
export const NAVIGATION_PATH_SERVICES_DETAIL: string = "ServicesDetail";

export const NAVIGATION_PATH_ONBOARDING: string = "Onboarding";
export const NAVIGATION_PATH_LANGUAGE_SELECT: string = "LanguageSelect";

export const NAVIGATION_PATH_FORM: string = "Form";

export const NAVIGATION_PATH_GUIDE_NAVIGATOR: string = "GuideNavigator";
export const NAVIGATION_PATH_PREMIUM_NAVIGATOR: string = "PremiumNavigator";
export const NAVIGATION_PATH_OFFERS: string = "Offers";

export const NAVIGATION_PATH_PROFILE_OVERLAY: string = "ProfileOverlay";

export const NAVIGATION_PATH_PDF: string = "Pdf";

/**
 * MARKDOWN CONSTANTS
 */

export const MARKDOWNTYPE_SLIDER: string = "slider";
export const MARKDOWNTYPE_IMAGE: string = "image";
export const MARKDOWNTYPE_VIDEO: string = "video";
export const MARKDOWNTYPE_ARTICLE_LINK: string = "articlelink";

export const MARKDOWNTYPES = [
  MARKDOWNTYPE_SLIDER,
  MARKDOWNTYPE_IMAGE,
  MARKDOWNTYPE_VIDEO,
  MARKDOWNTYPE_ARTICLE_LINK
];
