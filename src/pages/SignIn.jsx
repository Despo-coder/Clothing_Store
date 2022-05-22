import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  singInWithGoogleRedirect,
} from '../../src/utils/firebase.config';

const SignIn = () => {
  useEffect(() => {
    const redirectFunc = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    redirectFunc();
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };
  return (
    <div>
      SignIn Page
      <button onClick={logGoogleUser}>Sign In WIth Google</button>
      <button onClick={singInWithGoogleRedirect}>
        Sign In WIth Google Redirect
      </button>
    </div>
  );
};
export default SignIn;
