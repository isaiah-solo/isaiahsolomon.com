import firebase from 'gatsby-plugin-firebase';
import React, {useContext} from 'react';
import AdminSignInView from '../components/admin/AdminSignInView';
import FlatButton from '../components/generic/button/FlatButton';
import PageSkeleton from '../components/generic/skeleton/PageSkeleton';
import useGoogleSignIn from '../hooks/useGoogleSignIn';

const AdminSignInContext = React.createContext<
  Readonly<{
    error: firebase.FirebaseError | null;
    isLoading: boolean;
    isSignedIn: boolean;
    signedInUser: firebase.User | null;
    signIn: () => void;
    signOut: () => void;
  }>
>({
  error: null,
  isLoading: false,
  isSignedIn: false,
  signedInUser: null,
  signIn: (): void => {},
  signOut: (): void => {},
});

export function useIsSignedIn(): boolean {
  const {isSignedIn} = useContext(AdminSignInContext);
  return isSignedIn;
}

export function useIsSignedInUserEmailEqualTo(email: string): boolean {
  const {signedInUser} = useContext(AdminSignInContext);
  const signedInUserEmail = signedInUser?.email ?? null;

  return signedInUserEmail !== null && signedInUserEmail === email;
}

export function useSignInCallback(): () => void {
  const {signIn} = useContext(AdminSignInContext);
  return signIn;
}

export function useSignOutCallback(): () => void {
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

export function AdminSignInProvider({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  const [
    signIn,
    signOut,
    signedInUser,
    isSignedIn,
    isLoading,
    error,
  ] = useGoogleSignIn();

  return (
    <AdminSignInContext.Provider
      value={{
        signIn,
        signOut,
        signedInUser,
        isSignedIn,
        isLoading,
        error,
      }}>
      <AdminSignInImpl>{children}</AdminSignInImpl>
    </AdminSignInContext.Provider>
  );
}

function AdminSignInImpl({
  children,
}: Readonly<{
  children: React.ReactElement;
}>): React.ReactElement {
  const isSignedIn = useIsSignedIn();
  const isSignedInUserIsaiah = useIsSignedInUserEmailEqualTo(
    'isaiah.c.solomon@gmail.com',
  );
  const signOut = useSignOutCallback();
  const [isLoading] = useSignInLoadingState();

  if (isLoading) {
    return <PageSkeleton />;
  }

  if (!isSignedIn) {
    return <AdminSignInView />;
  }

  if (!isSignedInUserIsaiah) {
    // If somehow someone finds the admin route and tries to log in,
    // don't allow them to get in.
    return (
      <div>
        <div>Hm... you're not Isaiah?</div>
        <FlatButton onClick={signOut}>Sign Out</FlatButton>
      </div>
    );
  }

  return children;
}
