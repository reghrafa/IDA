
declare module "react-native-lightbox" {
    import { Animated } from 'react-native'
    const lb: React.FC<{
        activeProps?: object;
        renderHeader?: (close: () => void) => void;
        renderContent?: () => void;
        willClose?: () => void;
        onClose?: () => void;
        onOpen?: () => void;
        didOpen?: () => void;
        underlayColor?: string;
        backgroundColor?: string;
        swipeToDismiss?: boolean;
        springConfig?: Animated.SpringAnimationConfig
    }>;
    export default lb;
}