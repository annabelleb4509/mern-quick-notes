import { useState } from 'react';

import SignUpForm from '../../../components/SignUpForm/SignUpForm';
import LoginForm from '../../../components/LoginForm/LoginForm';

function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(true);
    return (
        <main>
          {
            showSignUp ?
            <SignUpForm setUser={ setUser } />
            :
            <LoginForm setUser={ setUser } />
          }
          <div>
            {
            showSignUp ?
            'Already signed up? Click here to Login'
            :
            'Click here to Sign Up'
          }
          </div>
          <button onClick={ () => setShowSignUp(!showSignUp) }>
            {
              showSignUp ?
              'Login'
              :
              'Sign Up'
            }
          </button>
        </main>
      );
}

export default AuthPage;

