import Analytics from 'appcenter-analytics';

export type AnalyticsEventTypes = "Navigation" | "Input" | "Bookmarked" | "";

export interface ISendAnalyticsEvent { (name: string, type: AnalyticsEventTypes): void }

export const sendAnalyticsEvent: ISendAnalyticsEvent = (name) => Analytics.trackEvent(name);

export const sendNavigationEvent = (
  from: string, fromParams: { [key: string]: string }, to: string, toParams: { [key: string]: string }
) => {
  let name = "Nav-" + to;
  Analytics.trackEvent(name, { from, fromParams: JSON.stringify(fromParams), to, toParams: JSON.stringify(toParams) });
}
export const sendTodoEvent = (
  todoId: string, type: "Check" | "Uncheck" | "Note"
) => {
  let name = "Todo-" + type
  Analytics.trackEvent(name, { todoId });
}
export const sendArticleEvent = (
  articleId: string, type: "Share" | "AddBookmark" | "RemoveBookmark"
) => {
  let name = "Article";
  switch (type) {
    case "Share":
      name += "-Share"
      break;
    case "AddBookmark":
      name += "-add-Bookmark"
      break;
    case "RemoveBookmark":
      name += "-remove-Bookmark"
      break;
  }
  Analytics.trackEvent(name, { articleId });
}
