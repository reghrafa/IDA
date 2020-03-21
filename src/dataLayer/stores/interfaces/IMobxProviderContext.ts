import { IRootUiStore } from "../RootUiStore";
import { IRootStore } from "../RootStore";

export default interface IMobxProviderContext {
  rootUiStore: IRootUiStore;
  rootStore: IRootStore;
}
