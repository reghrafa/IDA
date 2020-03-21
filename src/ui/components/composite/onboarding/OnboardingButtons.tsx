import React from "react";
import BottomButtons from "../bottombuttons/BottomButtons";

export interface IOnboardingButtons {
  onLast: boolean;
  jumpToLast: () => void;
  jumpToNext: () => void;
  jumpToLogin: () => void;
  jumpToApp: () => void;
}

export default (props: IOnboardingButtons) => {
  const data = [
    [
      {
        translationKey: "onboarding.insurance.button.letsStart",
        action: props.jumpToApp
      },
      {
        translationKey: "global.button.login",
        action: props.jumpToLogin,
        extraProps: {
          inverted: true,
          fontWeight: "normal18"
        }
      }
    ],
    [
      {
        translationKey: "global.button.next",
        action: props.jumpToNext
      },
      {
        translationKey: "global.button.skip",
        action: props.jumpToLast,
        extraProps: {
          inverted: true,
          transparent: true
        }
      }
    ]
  ][props.onLast ? 0 : 1];
  return <BottomButtons data={data} />;
};
