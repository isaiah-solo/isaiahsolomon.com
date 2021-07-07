import React, {useCallback, useContext, useEffect, useState} from 'react';

const MobileContext = React.createContext({isMobile: false});

type ProviderProps = Readonly<{
  children: React.ReactNodeArray | React.ReactElement;
}>;

export function useIsMobile(): boolean {
  const {isMobile} = useContext(MobileContext);
  return isMobile;
}

export function MobileProvider({children}: ProviderProps): React.ReactElement {
  const [isMobile, setIsMobile] = useState(null);

  const resizeFunc = useCallback(
    () =>
      setIsMobile(
        window.matchMedia('only screen and (max-width: 760px)').matches,
      ),
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', resizeFunc, false);

    return (): void => {
      window.removeEventListener('resize', resizeFunc);
    };
  }, [resizeFunc]);

  return (
    <MobileContext.Provider value={{isMobile}}>
      {children}
    </MobileContext.Provider>
  );
}
