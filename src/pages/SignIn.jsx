import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../src/utils/firebase.config';
import Signup from './Signup';
import Button from '../components/button/Button';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      SignIn Page
      <Button onClick={logGoogleUser} buttonType='google'>
        Sign In WIth Google
      </Button>
      <Signup />
    </div>
  );
};
export default SignIn;
