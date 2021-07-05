import React, {useContext, useEffect, useMemo, useState} from 'react'

const MobileContext = React.createContext({isMobile: false})

type ProviderProps = {
  children: React.ReactNodeArray | React.ReactElement
}

export function useIsMobile(): boolean {
  const {isMobile} = useContext(MobileContext)
  return isMobile
}

export function useMobileProvider() {
  const [isMobile, setIsMobile] = useState(null)

  useEffect((): (() => void) => {
    const resizeFunc = () => {
      setIsMobile(
        window.matchMedia('only screen and (max-width: 760px)').matches,
      )
    }

    window.addEventListener('resize', resizeFunc, false)

    return (): void => {
      window.removeEventListener('resize', resizeFunc)
    }
  }, [])

  return useMemo(() => {
    return ({children}: ProviderProps): React.ReactElement => (
      <MobileContext.Provider value={{isMobile}}>
        {children}
      </MobileContext.Provider>
    )
  }, [isMobile])
}
