import {StyleSheet} from 'aphrodite'

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
})

export default {
  primary: [styles.root, styles.primary],
  secondary: [styles.root, styles.secondary],
}
