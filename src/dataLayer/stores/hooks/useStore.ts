import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";
import { IRootStore } from "../RootStore";
import { IEduRootStore } from "../EduRootStore";
import { IEduUserStore } from "../EduUserStore";
import { IEduTodoStore } from "../EduTodoStore";
import { IEduGuideStore } from "../EduGuideStore";
import { IEduPremiumStore } from "../EduPremiumStore";
import { IEduUIStore } from "../EduUIStore";

export const useStore = (): { rootStore: IRootStore } =>
  useContext(MobXProviderContext);

export const useRootStore = (): IEduRootStore =>
  useContext(MobXProviderContext).rootStore;

export const useUserStore = (): IEduUserStore =>
  useContext(MobXProviderContext).rootStore.User;

export const useTodoStore = (): IEduTodoStore =>
  useContext(MobXProviderContext).rootStore.Todo;

export const useGuideStore = (): IEduGuideStore =>
  useContext(MobXProviderContext).rootStore.Guide;

export const usePremiumStore = (): IEduPremiumStore =>
  useContext(MobXProviderContext).rootStore.Premium;

export const useUIStore = (): IEduUIStore =>
  useContext(MobXProviderContext).rootStore.UI;
