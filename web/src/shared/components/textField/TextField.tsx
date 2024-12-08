import { useState } from 'react';

interface TextFieldProps {
  label: string;
  type?: 'text' | 'password';
  name?: string;
  onValidate?: (value: string) => string | undefined;
  onChange: (value: string) => void;
}

export default function TextField({
  label,
  type = 'text',
  name,
  onChange,
  onValidate,
}: TextFieldProps) {
  const [error, setError] = useState<string>();

  return (
    <label className="flex flex-col gap-1">
      <span>{label}</span>
      <input
        className="p-2 outline-none rounded-md transition-color bg-slate-100 focus:outline-2 focus:outline-offset-1 focus:outline-primary"
        type={type}
        name={name}
        onChange={(e) => {
          if (onValidate) setError(onValidate(e.target.value));
          onChange(e.target.value);
        }}
      />
      {!!error && <span className="text-tertiary">{error}</span>}
    </label>
  );
}
