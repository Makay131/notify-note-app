import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import Input from '../../components/input/Input';
import { Loader, Lock } from 'lucide-react';
import { useResetPassword } from '../../service/auth/mutations';

export const Route = createFileRoute('/password-reset/$token')({
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');

  const mutation = useResetPassword();

  const { token } = Route.useParams();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (password !== verifyPassword) {
      setError("Passwords don't match!");
      return;
    }

    try {
      await mutation.mutateAsync({ token, password });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <div className="max-w-md w-full overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-notify-color-primary-dark">Welcome Back</h2>
          <form onSubmit={handleResetPassword}>
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Re-enter Password"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
            />
            <button className="mt-5 w-full py-3 px-4 bg-notify-color-primary text-white font-bold rounded-lg border border-notify-color-primary hover:bg-transparent hover:text-notify-color-primary transition duration-300">
              {mutation.isPending ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : 'Reset Password'}
            </button>
            {mutation.isError || error ? <div className="text-red-600">{error}</div> : null}
          </form>
        </div>
      </div>
    </div>
  );
}
