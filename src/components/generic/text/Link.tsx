import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    color: '#457b9d',
    display: 'inline',
    textDecoration: 'none',
  },
})

type Props = Readonly<{
  children: React.ReactElement | string
  styles?: Object
  href: string
}>

export default function Link({
  children,
  styles: stylesFromProps,
  href,
}: Props): React.ReactElement {
  return (
    <a
      className={css(styles.root, stylesFromProps)}
      href={href !== '' ? href : '#'}
      rel="noreferrer"
      target="_blank">
      {children}
    </a>
  )
}
