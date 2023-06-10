import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
    className?: string;
    type?: 'submit' | 'button';
    children: ReactNode;
    onClick: () => void;
}

export default function Button({ onClick, children, type = 'button', className }: ButtonProps) {
    return (
      <button
        className={`button ${className}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
}