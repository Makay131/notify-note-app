import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { useForgotPassword } from '../../service/auth/mutations';
import { ArrowLeft, Loader, Mail } from 'lucide-react';
import Input from '../../components/input/Input';

export const Route = createLazyFileRoute('/forgot-password/')({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const mutation = useForgotPassword();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      await mutation.mutateAsync(email);
      setIsSubmitted(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.response.data.message);
      setIsSubmitted(false);
    }
  };
  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <div className="max-w-md w-full overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-notify-color-primary-dark">Forgot Password</h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <p className="mb-6 text-center text-notify-color-primary">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="mt-5 w-full py-3 px-4 bg-notify-color-primary text-white font-bold rounded-lg border border-notify-color-primary hover:bg-transparent hover:text-notify-color-primary transition duration-300">
                {mutation.isPending ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : 'Send Reset Link'}
              </button>
              {mutation.isError ? <div>{error}</div> : null}
            </form>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-notify-color-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-notify-color-primary-light" />
              </div>
              <p className="text-notify-color-primary-dark">
                If an account exists for {email}, you will recieve a password reset link shortly.
              </p>
            </div>
          )}
        </div>
        <div className="px-8 py-4 flex justify-center">
          <Link to="/signup" className="text-notify-color-primary flex items-center hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
