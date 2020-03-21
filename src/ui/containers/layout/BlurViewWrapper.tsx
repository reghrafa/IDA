import React, { useState, useEffect } from 'react';
import { findNodeHandle, Platform, Dimensions } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

interface IWrappedBlurViewType {
  showBlur?: boolean
  blurAmount?: number
  children: any,
}

export type BlurTypes = "xlight" | "light" | "dark";
export type FindDomHandleTypes = number | null

// Stateless function component
const BlurViewWrapper = (props:IWrappedBlurViewType) => {
  const [canBlurInAndroid, setCanBlurInAndroid] = useState(!isAndroid)
  const [viewRef, setViewRef] = useState(null)
  const [nodeHandleRef, setNodeHandleRef] = useState<FindDomHandleTypes>(null)
  const [blurType] = useState<BlurTypes>('light')

  /*
   * When the view to be blurred changes, we reset the component and start from the beggining.
   */
  useEffect(() => {
    if (isAndroid) {
      setViewRef(null)
      setNodeHandleRef(null)
      setCanBlurInAndroid(false)
    }
  }, [isAndroid])

  /*
   * Finds the element reference and passes it to the BlurView.
   */
  const blur = () => {
    // if we are not in android.. or if the blur cannot be shown.. or if it is already shown.. we skip..
    if (!isAndroid || !props.showBlur || canBlurInAndroid) {
      return ;
    }

    /*
     * Time out is there to just make sure we run it on the top of the queue.
     * Making the timeout value to 0 should not affect anything.
     */
    setTimeout(() => {
      setNodeHandleRef(findNodeHandle(viewRef))
      setCanBlurInAndroid(true)
    }, 10);
  };

  // if we are not blurring, we just retun the children back..
  if (!props.showBlur) {
    return props.children;
  }

  // we can accept only one child.
  // If you have mutliple child make sure you render it wrapped inside a `View``
  const isValidChild = React.isValidElement(props.children);
  if (!isValidChild) {
    console.error('BlurViewWrapper expects child to be a single element.');
    return null;
  }

  /* Prepare the style */
  // in android.. we the actual blurred view to be hidden slightly for the blur to be visible properly
  let newStyles = [];
  const myStyleOpactiy = {
    opacity: isAndroid ? 0.3 : 1,
  };

  const {children} = props
  if (!children) {
    return null
  }

  if (children.props.style instanceof Array) {
    newStyles = [...children.props.style, myStyleOpactiy];
  } else {
    /* Prepare the style */
    if (!children.props.style) {
      newStyles.push(children.props.style);
    }
    newStyles.push(myStyleOpactiy);
  }

  // render the actual element with blur view..
  return (
    <React.Fragment>
      {
        React.cloneElement(children, {
          ...children.props,
          ref: (el:any) => {
            if (el && el !== viewRef) {
              setViewRef(el);
              if (typeof blur === 'function') {
                blur();
              }
            }
          },
          style: newStyles,
        })
      }
      {
        canBlurInAndroid &&
        <BlurView
          blurType={blurType}
          blurAmount={props.blurAmount}
          // overlayColor="#fffffdb0"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            width: viewportWidth,
            height: viewportHeight
          }}
          viewRef={nodeHandleRef}
        />
      }
    </React.Fragment>
  );
}

BlurViewWrapper.defaultProps = {
  blurAmount: 3,
  showBlur: true,
  children: <div></div>
}

export default BlurViewWrapper;