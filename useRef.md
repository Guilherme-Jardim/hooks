## useRef

- Permite pegar a referência de um elemento HTML.
- permite criar uma referência a um elemento do DOM ou a um valor que persiste entre as renderizações de um componente. É útil para acessar diretamente elementos do DOM, gerenciar dados que não causam a renderização do componente ou manter uma referência a um valor sem desencadear uma nova renderização. Em resumo, useRef é usado para armazenar informações que não precisam ser reativas e para interagir com elementos do DOM diretamente.

## Exemplo abaixo de useRef 

## ----------------------------------------------------------------

```jsx
import React, { useRef } from 'react';

function ExemploUseRef() {
  const inputRef = useRef(null);

  const definirFoco = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Exemplo useRef</h1>
      <input ref={inputRef} type="text" placeholder="Digite algo" />
      <button onClick={definirFoco}>Definir Foco no Campo</button>
    </div>
  );
}

export default ExemploUseRef;


## ----------------------------------------------------------------

import React, { useRef, useEffect } from 'react';

function ContadorComUseRef() {
  const contadorRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      contadorRef.current += 1;
      console.log(`Contagem: ${contadorRef.current}`);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Contador com useRef</h1>
      <p>Abra o console para ver a contagem.</p>
    </div>
  );
}

export default ContadorComUseRef;

## ----------------------------------------------------------------
