import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Lock, Mail, Loader } from 'lucide-react';
import { useState } from 'react';
import Input from '../../components/input/Input';

export const Route = createLazyFileRoute('/login/')({
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = false;

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <div className="max-w-md w-full overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-notify-color-primary-dark">Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <Input
              icon={Mail}
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center mb-6">
              <Link to="/forgot-password" className="text-notify-color-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <button className="mt-5 w-full py-3 px-4 bg-notify-color-primary text-white font-bold rounded-lg border border-notify-color-primary hover:bg-transparent hover:text-notify-color-primary transition duration-300">
              {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : 'Login'}
            </button>
          </form>
        </div>
        <div className="px-8 py-4 flex justify-center">
          <p>
            Don't have an account?&nbsp;
            <Link to="/signup" className="text-notify-color-primary hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
