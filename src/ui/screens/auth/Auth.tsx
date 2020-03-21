import { observer } from "mobx-react";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

export interface IAuthProps {}

const Auth = observer((props: IAuthProps) => {
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  const { rootStore } = useStore();
  if (rootStore.user.signInState === "loggedIn") {
    sendNavigationEvent(routeName, params || {}, "App", {});
    navigate("App");
  } else {
    sendNavigationEvent(routeName, params || {}, "Login", {});
    navigate("Login");
  }
  return null;
});

export default Auth;
