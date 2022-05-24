import { useState } from 'react';
import FormInput from './formInput/FormInput';
import {
  createAuthUserFromEmailandPassword,
  createUserDocumentFromAuth,
} from '../utils/firebase.config';
import '../sign-up-form.scss';
import Button from './button/Button';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formfields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formfields;

  const SignUpEventHandler = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const { user } = await createAuthUserFromEmailandPassword(
          email,
          password
        );

        await createUserDocumentFromAuth(user, { displayName });
        setFormFields(defaultFormFields);
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email is already taken');
        }
        console.error(error);
      }
    } else {
      alert('Passwords Do Not Match');
    }
  };

  const OnchangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formfields, [name]: value });
  };
  return (
    <div className='sign-up-container'>
      <h2>Dont have an Account ?</h2>
      <span>Sign Up with Email and Password</span>
      <form onSubmit={SignUpEventHandler}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={OnchangeHandler}
          name='displayName'
          value={displayName}
        />
        <FormInput
          label='Email'
          type='email'
          required
          onChange={OnchangeHandler}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={OnchangeHandler}
          name='password'
          value={password}
        />
        <FormInput
          label='ConfirmPassword'
          type='password'
          required
          onChange={OnchangeHandler}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'> Sign Up </Button>
      </form>
    </div>
  );
};
export default SignUp;
