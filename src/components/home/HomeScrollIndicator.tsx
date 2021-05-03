import React, {useEffect, useState} from "react";
import {StyleSheet, css} from 'aphrodite';

import HoverButton from "../generic/button/HoverButton";

import useDebounced from "../../hooks/useDebounced";

const arrowKeyframes = {
  '0%': {
    transform: 'translateX(-50%) translateY(-100%)',
  },
  '30%': {
    transform: 'translateX(-50%) translateY(calc(-100% - 40px))',
  },
  '40%': {
    transform: 'translateX(-50%) translateY(-100%)',
  },
  '50%': {
    transform: 'translateX(-50%) translateY(calc(-100% - 20px))',
  },
  '60%': {
    transform: 'translateX(-50%) translateY(-100%)',
  },
  '100%': {
    transform: 'translateX(-50%) translateY(-100%)',
  },
}

const styles = StyleSheet.create({
  arrow: {
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderTop: '20px solid #1d3557',
    boxSizing: 'border-box',
    height: 0,
    left: '50%',
    position: 'relative',
    top: '50%',
    transform: 'translateX(-50%) translateY(-100%)',
    width: 0,
  },
  arrowAnimation: {
    animationName: [arrowKeyframes],
    animationDuration: '1s, 1200ms',
    animationIterationCount: 'infinite',
  },
  button: {
    backgroundColor: 'white',
    height: 46,
    position: 'relative',
    width: '100%',
  },
  buttonHover: {
    ':hover': {
      boxShadow: '0 1px 6px rgb(32 33 36 / 28%)',
    }
  }
});

export default function HomeScrollIndicator(): React.ReactElement {
  const [shouldAnimateArrow, setShouldAnimateArrow] = useState(false);
  const [isIndicatorAck, setIsIndicatorAck] = useState(false);

  const showArrow = useDebounced((): void => {
    setShouldAnimateArrow(true);
  }, 1000);

  useEffect((): void => {
    setTimeout(showArrow, 1000);
  }, []);

  return (
    <HoverButton
      onClick={(): void => setIsIndicatorAck(true)}
      onMouseEnter={(): void => setShouldAnimateArrow(false)}
      onMouseLeave={showArrow}
      styleOverride={[styles.button, !isIndicatorAck && styles.buttonHover]}>
      {!isIndicatorAck && <div className={css(styles.arrow, shouldAnimateArrow && styles.arrowAnimation)} />}
    </HoverButton>
  );
};
