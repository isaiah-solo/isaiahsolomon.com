import firebase from 'gatsby-plugin-firebase';
import React, {useContext} from 'react';
import AdminSignInView from '../components/admin/AdminSignInView';
import FlatButton from '../components/generic/button/FlatButton';
import PageSkeleton from '../components/generic/skeleton/PageSkeleton';
import useGoogleSignIn from '../hooks/useGoogleSignIn';

const AdminSignInContext = React.createContext<
  Readonly<{
    signIn: () => void;
    signOut: () => void;
    signedInUser: firebase.User | null;
    isSignedIn: boolean;
    isLoading: boolean;
    error: firebase.FirebaseError | null;
  }>
>({
  signIn: (): void => { },
  signOut: (): void => { },
  signedInUser: null,
  isSignedIn: false,
  isLoading: false,
  error: null,
});

type ProviderProps = Readonly<{
  children: React.ReactElement;
}>;

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

export function AdminSignInProvider({children}: ProviderProps) {
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
