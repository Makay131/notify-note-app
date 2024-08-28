import { createLazyFileRoute } from '@tanstack/react-router';
import { useCallback, useEffect, useRef, useState } from 'react';

export const Route = createLazyFileRoute('/verify-email/')({
  component: () => <VerifyEmailPage />,
});

export default function VerifyEmailPage() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSubmit = useCallback(
    (e?: React.FormEvent<HTMLFormElement>) => {
      if (e) e.preventDefault();

      const verificationCode = code.join('');
      console.log(verificationCode);
    },
    [code],
  );

  //auto submit when all digits are loaded
  useEffect(() => {
    if (code.every((digit) => digit !== '')) {
      handleSubmit();
    }
  }, [code, handleSubmit]);

  const isLoading = false;

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];

    //paste
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split('');
      [...Array(6)].forEach((_, i) => {
        newCode[i] = pastedCode[i] || '';
      });
      setCode(newCode);

      //focus on the first empty
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== '');
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex]?.focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <div className="max-w-md w-full overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-notify-color-primary-dark">Verify Your Email</h2>
          <p className="text-center text-gray-300 mb-6">Enter the 6-digit code that is sent to your email address.</p>
          <form>
            <div className="flex justify-between items-center">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={6}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-2xl font-bold text-notify-color-primary-dark border-2 border-border-notify-color-primary rounded-lg focus:border-notify-color-primary focus:outline-none"
                />
              ))}
            </div>
            <button
              className="mt-5 w-full py-3 px-4 bg-notify-color-primary text-white font-bold rounded-lg border border-notify-color-primary hover:bg-transparent disabled:opacity-50 hover:text-notify-color-primary transition duration-300"
              type="submit"
              disabled={isLoading || code.some((digit) => !digit)}
            >
              {isLoading ? 'Verifying...' : 'Verify Email'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
