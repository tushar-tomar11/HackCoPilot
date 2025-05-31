import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = false,
      leftIcon,
      rightIcon,
      containerClassName,
      labelClassName,
      inputClassName,
      helperTextClassName,
      errorClassName,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('space-y-1', fullWidth && 'w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={props.id}
            className={cn('block text-sm font-medium text-gray-700', labelClassName)}
          >
            {label}
          </label>
        )}
        <div className={cn('relative', fullWidth && 'w-full')}>
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'form-input rounded-md shadow-sm',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error && 'border-error-300 focus:border-error-500 focus:ring-error-500',
              fullWidth && 'w-full',
              inputClassName
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>
        {helperText && !error && (
          <p className={cn('text-xs text-gray-500', helperTextClassName)}>
            {helperText}
          </p>
        )}
        {error && (
          <p className={cn('text-xs text-error-600', errorClassName)}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;