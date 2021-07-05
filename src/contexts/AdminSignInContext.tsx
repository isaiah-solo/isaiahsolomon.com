import firebase from "gatsby-plugin-firebase";
import React, {useContext, useMemo} from "react";

import useGoogleSignIn from "../hooks/useGoogleSignIn";

const AdminSignInContext = React.createContext<Readonly<{
  signIn: () => void,
  signOut: () => void,
  signedInUser: firebase.User | null,
  isSignedIn: boolean,
  isLoading: boolean,
  error: firebase.FirebaseError | null
}>>({
  signIn: (): void => { },
  signOut: (): void => { },
  signedInUser: null,
  isSignedIn: false,
  isLoading: false,
  error: null
});

type ProviderProps = {
  children: React.ReactNodeArray | React.ReactElement,
};

export function useIsSignedIn(): boolean {
  const {isSignedIn} = useContext(AdminSignInContext);
  return isSignedIn;
}

export function useIsSignedInUserEmailEqualTo(email: string): boolean {
  const {signedInUser} = useContext(AdminSignInContext);
  const signedInUserEmail = signedInUser?.email ?? null;
  
  return signedInUserEmail !== null && signedInUserEmail === email;
}

export function useSignInCallback(): (() => void) {
  const {signIn} = useContext(AdminSignInContext);
  return signIn;
}

export function useSignOutCallback(): (() => void) {
  const {signOut} = useContext(AdminSignInContext);
  return signOut;
}

export function useSignInLoadingState(): [
  boolean,
  firebase.FirebaseError | null,
] {
  const {isLoading, error} = useContext(AdminSignInContext);
  return [isLoading, error];
}

export function useAdminSignInProvider() {
  const [
    signIn,
    signOut,
    signedInUser,
    isSignedIn,
    isLoading,
    error,
  ] = useGoogleSignIn();

  return useMemo(() => (
    ({children}: ProviderProps): React.ReactElement => (
      <AdminSignInContext.Provider
        value={{
          signIn,
          signOut,
          signedInUser,
          isSignedIn,
          isLoading,
          error,
        }}>
        {children}
      </AdminSignInContext.Provider>
    )),
    [
      signIn,
      signOut,
      signedInUser,
      isSignedIn,
      isLoading,
      error,
    ],
  );
}
