import {IRootStore} from './stores/RootStore';
import {MobXProviderContext} from 'mobx-react';
import {useContext} from 'react';
export const useStore = (): IRootStore => useContext(MobXProviderContext).store;
