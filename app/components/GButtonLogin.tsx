interface GButtonLoginProps {
  text: string;
  type?: "button" | "submit" | "reset"
  onClick?: () => void;
}

export function GButtonLogin({ onClick, text, type = "button" }: GButtonLoginProps) {

  return (
    <button
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )


}