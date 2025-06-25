declare module './Button' {
  import { FC, ReactNode } from 'react';
  interface ButtonProps {
    variant?: string;
    size?: string;
    disabled?: boolean;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
  }
  const Button: FC<ButtonProps>;
  export default Button;
}

declare module './Card' {
  import { FC, ReactNode } from 'react';
  interface CardProps {
    title: string;
    content: string;
  }
  const Card: FC<CardProps>;
  export default Card;
}
