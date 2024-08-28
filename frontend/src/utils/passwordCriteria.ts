export const criteria = (password: string) => [
  { label: 'At least 6 characters', met: password.length >= 6 },
  { label: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
  { label: 'Contains lowercase letter', met: /[a-z]/.test(password) },
  { label: 'Contains a number', met: /\d/.test(password) },
  { label: 'Contains special character', met: /[^A-Za-z0-9]/.test(password) },
];

export const getStrength = (password: string) => {
  let strength = 0;

  if (password.length >= 6) strength++;
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
  if (password.match(/\d/)) strength++;
  if (password.match(/[^a-zA-Z\d]/)) strength++;

  return strength;
};

export const getColor = (strength: number) => {
  if (strength === 0) return 'bg-red-500';
  if (strength === 1) return 'bg-red-400';
  if (strength === 2) return 'bg-yellow-500';
  if (strength === 3) return 'bg-yellow-400';
  return 'bg-green-500';
};

export const getStrengthText = (strength: number) => {
  if (strength === 0) return 'Very Weak';
  if (strength === 1) return 'Weak';
  if (strength === 2) return 'Fair';
  if (strength === 3) return 'Good';
  return 'Strong';
};
