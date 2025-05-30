import React from 'react';
import styles from './Button.module.css';

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
  const sizeClass = styles[size];
  const variantClass = styles[`btn${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const combined = `${styles.button} ${sizeClass} ${variantClass} ${className}`.trim();

  return (
    <Component className={combined} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
