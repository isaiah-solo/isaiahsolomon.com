import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    display: 'block',
    fontFamily: "'Open Sans', sans-serif",
  },
  primary: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

const useTextStyles = (
  textStyle: string,
): Array<Object> => {
  return [
    styles.root,
    styles[textStyle],
  ];
};

export default useTextStyles;
