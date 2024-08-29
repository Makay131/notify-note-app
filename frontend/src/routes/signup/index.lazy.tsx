import { createLazyFileRoute, Link } from '@tanstack/react-router';

import { Mail, User } from 'lucide-react';
import Input from '../../components/input/Input';
import { useState } from 'react';
import PasswordStrengthScale from '../../components/passwordStrength/PasswordStrengthScale';
import { getStrength } from '../../utils/passwordCriteria';
import { useCreateUser } from '../../service/auth/mutations';

export const Route = createLazyFileRoute('/signup/')({
  component: SignupPage,
});

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const mutation = useCreateUser();

  const derivedIsValid = getStrength(password) >= 3;

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = { email, password, name };
    try {
      await mutation.mutateAsync(body);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <div className="max-w-md w-full overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-notify-color-primary-dark">Create Account</h2>
          <form onSubmit={handleSignup}>
            <Input
              icon={User}
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={Mail}
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Mail}
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {mutation.isError ? <div>{error}</div> : null}
            <PasswordStrengthScale password={password} />
            {derivedIsValid && (
              <button className="mt-5 w-full py-3 px-4 bg-notify-color-primary text-white font-bold rounded-lg border border-notify-color-primary hover:bg-transparent hover:text-notify-color-primary transition duration-300">
                {mutation.isPending ? 'Signing up...' : 'Sign Up'}
              </button>
            )}
          </form>
        </div>
        <div className="px-8 py-4 flex justify-center">
          <p>
            Already have an account?&nbsp;
            <Link to="/login" className="text-notify-color-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
