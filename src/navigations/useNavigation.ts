import { useNavigation } from "react-navigation-hooks";
import Analytics from "appcenter-analytics";

export default () => {
  const { navigate, goBack, push, router } = useNavigation();
  console.warn("Router", router);
  const nav = (dest: string, options: object) => {
    Analytics.trackEvent("Navigation", {
      type: "navigate",
      destination: dest,
      options: options.toString()
    });
    return navigate(dest, options);
  };
  const gB = () => {
    Analytics.trackEvent("Navigation", { type: "goBack" });
    return goBack();
  };
  const p = (dest: string, options: object) => {
    Analytics.trackEvent("Navigation", {
      type: "push",
      destination: dest,
      options: options.toString()
    });
    return push(dest, options);
  };
  return {
    navigate: nav,
    goBack: gB,
    push: p
  };
};
