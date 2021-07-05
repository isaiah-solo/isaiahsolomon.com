import React from 'react'
import {css, StyleDeclarationValue, StyleSheet} from 'aphrodite'

import Title2 from '../generic/text/Title2'
import Paragraph from '../generic/text/Paragraph'

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
  content: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
  header: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
})

type Props = Readonly<{
  children: React.ReactNodeArray | React.ReactElement
  styleOverride?: StyleDeclarationValue
  subtitle: string
  title: string
}>

export default function TimelineSection({
  children,
  styleOverride,
  subtitle,
  title,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root, styleOverride)}>
      <div>
        {title !== null && <Title2>{title}</Title2>}
        {subtitle !== null && <Paragraph>{subtitle}</Paragraph>}
      </div>
      <div className={css(styles.content)}>{children}</div>
    </div>
  )
}
