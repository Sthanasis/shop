'use client';
import { MouseEvent, ReactNode } from 'react';
import { ButtonVariant } from '@/shared/types/buttonVariant';
import { ButtonColor } from '@/shared/types/buttonColor';
import Ripple from '@/shared/components/ripple/Ripple';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  type?: 'button' | 'submit';
  color?: ButtonColor;
  rounded?: boolean;
  disabled?: boolean;
  full?: boolean;
  ariaLabel?: string;
  disableRipple?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  variant = 'text',
  type = 'button',
  color = 'default',
  rounded = false,
  disabled,
  ariaLabel,
  full = false,
  disableRipple = false,
  onClick,
}: ButtonProps) => {
  const baseClasses =
    'cursor-pointer overflow-hidden flex items-center justify-center relative z-0 outline-none duration-200 disabled:text-gray-400 outline-offset-0';

  const variantClasses = {
    filled:
      'hover:bg-opacity-level-80 focus:bg-opacity-level-80 text-snow-white',
    outlined:
      'border border-solid hover:bg-opacity-level-10 focus:bg-opacity-level-10 hover:border-opacity-100 focus:border-opacity-100',
    text: '',
  };

  const primaryClasses = {
    filled: 'bg-primary text-snow-white',
    outlined:
      'text-primary border-primary border-opacity-40 hover:bg-primary focus:bg-primary',
    text: 'text-primary hover:bg-primary hover:bg-opacity-level-10',
  };

  const defaultClasses = {
    filled: 'bg-slate-gray hover:bg-slate-500',
    outlined:
      'border-slate-gray border-opacity-50 hover:bg-smokey-gray focus:bg-slate-gray',
    text: 'hover:bg-slate-gray hover:bg-opacity-level-10 focus:bg-slate-gray focus:bg-opacity-level-50 disabled:hover:bg-transparent disabled:cursor-default',
  };

  const buttonStyle = {
    primary: primaryClasses[variant],
    default: defaultClasses[variant],
  };

  const rippleClasses = {
    filled: undefined,
    outlined: 'bg-gray-400',
    text: 'bg-gray-400',
  };

  return (
    <button
      className={[
        baseClasses,
        variantClasses[variant],
        buttonStyle[color],
        rounded ? 'rounded-full p-4' : 'rounded-lg px-4 py-2',
        full ? 'w-full' : '',
      ].join(' ')}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {!disableRipple && <Ripple colorClasses={rippleClasses[variant]} />}
    </button>
  );
};

export default Button;
