import React, { useMemo, useState, useEffect, useRef } from 'react';
import {
  useTransition,
  animated,
  config,
  ReactSpringHook,
  useChain,
} from 'react-spring';
import styles from './SeriesDetails.module.scss';

export interface SeriesDetailsProps {
  isOpen: boolean;
  initialCoordinates?: DOMRect;
  onRequestClose: () => void;
}

const SeriesDetails: React.FC<SeriesDetailsProps> = ({
  isOpen,
  initialCoordinates,
  onRequestClose,
}) => {
  const { x, y, width, height } = initialCoordinates || {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  const enterLeaveStyleProperties = {
    top: y,
    left: x,
    width: width,
    height: height,
    delay: 500,
  };

  const baseStyleProperties = {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    delay: 500,
  };

  const titleTransitionsRef = useRef<any>();
  const imageTransitionsRef = useRef<any>();

  const imageTransitions = useTransition(isOpen, null, {
    ref: imageTransitionsRef,
    from: enterLeaveStyleProperties,
    enter: baseStyleProperties,
    leave: enterLeaveStyleProperties,
    config: {
      mass: 1,
      tension: 300,
      friction: 35,
    },
  });

  const titleTransitions = useTransition(isOpen, null, {
    ref: titleTransitionsRef,
    from: { transform: 'translateY(100%)', opacity: 0 },
    enter: { transform: 'translateY(0)', opacity: 1 },
    leave: { transform: 'translateY(100%)', opacity: 0 },
  });

  useChain(
    isOpen
      ? [imageTransitionsRef, titleTransitionsRef]
      : [titleTransitionsRef, imageTransitionsRef],
    [0, isOpen ? 0.1 : 0.3]
  );

  return (
    <>
      {imageTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              className={styles['series-details']}
              style={props}
              onClick={onRequestClose}
            >
              <div className={styles['series-details__image']}></div>
              {titleTransitions.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.div
                      key={key}
                      className={styles['series-details__title']}
                      style={props}
                    >
                      The Handmaid's Tale
                    </animated.div>
                  )
              )}
            </animated.div>
          )
      )}
    </>
  );
};

export default SeriesDetails;
