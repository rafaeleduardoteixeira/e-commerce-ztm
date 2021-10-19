import { useState } from 'react';

// COMPONENTS
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

// STYLES
import './sign-in.styles.scss';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const updatePassword = (e: React.FormEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);
  const updateEmail = (e: React.FormEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={() => handleSubmit}>
        <FormInput
          id="email"
          type="email"
          onChange={updateEmail}
          name="email"
          label="E-mail"
          value={email}
          required
        />
        <FormInput
          id="password"
          type="password"
          onChange={updatePassword}
          name="password"
          label="Password"
          value={password}
          required
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
