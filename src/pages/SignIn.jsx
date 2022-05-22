import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../src/utils/firebase.config';

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };
  return (
    <div>
      SignIn Page
      <button onClick={logGoogleUser}>Sign In WIth Google</button>
    </div>
  );
}
export default SignIn;
