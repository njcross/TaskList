// Button.tsx or ButtonExercise.tsx
import './Button.css';
import React from 'react';

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

// Generic polymorphic props
type ButtonOwnProps<E extends React.ElementType = 'button'> = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  as?: E;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<E>;

const Button = <E extends React.ElementType = 'button'>({
  as,
  size = 'medium',
  variant = 'primary',
  children,
  className = '',
  ...rest
}: ButtonOwnProps<E>) => {
  const Component = as || 'button';
  const classes = `button ${size} btn-${variant} ${className}`;
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
