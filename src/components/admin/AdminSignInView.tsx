import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import {
  useSignInCallback,
  useSignInLoadingState,
} from '../../contexts/AdminSignInContext'
import Title1 from '../generic/text/Title1'

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    boxSizing: 'border-box',
    height: 'calc(100vh - 16px)',
    position: 'relative',
    width: '100%',
  },
  body: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 20,
    gridTemplateRows: '1fr auto',
    left: '50%',
    position: 'relative',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: 'fit-content',
  },
})

export default function AdminSignInView(): React.ReactElement {
  const signInCallback = useSignInCallback()
  const [isLoading, error] = useSignInLoadingState()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.body)}>
        <Title1>Welcome back Daddy</Title1>
        <button onClick={signInCallback}>Sign in with Google</button>
      </div>
    </div>
  )
}
