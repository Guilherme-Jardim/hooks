'use client';
import { forwardRef } from 'react';
interface GLabelProps {
  text: string;
  title: string;
  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
  type: string;
  value: string;
}


export const GLabel = forwardRef(function GLabel({ text, title, onChange, onPressEnter, type, value }: GLabelProps, ref?: React.Ref<HTMLInputElement>) {
  return (
    <label>
      <p>
        {text}
      </p>
      <span>
        {title}
      </span>
      <input
        onKeyDown={e => e.key === 'Enter' ? onPressEnter && onPressEnter?.() : undefined}

        value={value}
        onChange={e => onChange(e.target.value)}
        type={type}
        ref={ref}
      />
    </label>
  );
});