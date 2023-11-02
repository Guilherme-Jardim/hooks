'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GLabel } from "../components/GLabel";

export default function Home() {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);
    if (inputPasswordRef.current !== null) {
      inputPasswordRef.current.focus();
    }
  }, [email, password]);

  const emailLength = useMemo(() => {
    console.log('executou email');
    return email.length;
  }, [email]);

  const passwordLength = useMemo(() => {
    console.log('executou password');
    return password.length;
  }, [password]);


  return (
    <div>
      <form className="">
        <GLabel
          text={`Quantidade de caractéres email: ${emailLength}`}
          title="Email"
          type="email"
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        <GLabel
          text={`Quantidade de caractéres senha: ${passwordLength}`}
          title="Senha"
          type="password"
          value={password}
          ref={inputPasswordRef}
          onChange={newValue => setPassword(newValue)}
        />
        <button
          type="button"
          onClick={handleEntrar}
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
