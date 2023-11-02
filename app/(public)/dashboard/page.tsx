'use client';
import { useRef } from 'react';
export default function Home() {
  const counterRef = useRef({ counter: 0 }) // não vai ter efeito de renderização na tela

  return (
    <div>
      <p>Dashboard</p>
      <p>Contador: {counterRef.current.counter}</p>

      <button onClick={() => counterRef.current.counter++}>Somar</button>
      <button onClick={() => console.log(counterRef.current.counter++)}>console.log</button>

    </div>
  )
}
