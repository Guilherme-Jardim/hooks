'use client';
interface GLabelProps {
  text: string;
  title: string;
  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
  type: string;
  value: string;
  ref?: React.RefObject<HTMLInputElement>;
}


export function GLabel({ text, title, onChange, onPressEnter, type, value, ref }: GLabelProps) {
  return (
    <>
      <label>
        <p>
          {text}
        </p>
        <span>
          {title}
        </span>
        <input
          onKeyDown={e => e.key === 'Enter' ? onPressEnter && onPressEnter() : undefined}

          value={value}
          onChange={e => onChange(e.target.value)}
          type={type}
          ref={ref}
        />
      </label>
    </>
  );
}