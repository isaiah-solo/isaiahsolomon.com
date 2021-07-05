import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 8,
    gridTemplateColumns: 'auto auto 1fr',
    padding: 8,
  },
})

type Props = Readonly<{
  primaryCTA: React.ReactElement
  secondaryCTA?: React.ReactElement | null
}>

export default function CardFooter({
  primaryCTA,
  secondaryCTA = null,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root)}>
      {primaryCTA}
      {secondaryCTA !== null ? secondaryCTA : <div />}
      <div />
    </div>
  )
}
