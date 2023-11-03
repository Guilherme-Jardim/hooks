## useEffect
- Permite realizar ações ou efeitos colaterais em componentes. Esses efeitos colaterais podem incluir a execução de código após a renderização do componente, lidar com solicitações de rede, assinar eventos, entre outros.
- É usado para lidar com ações que ocorrem fora da renderização principal do componente.

## Exemplo abaixo de useEffect 

## ----------------------------------------------------------------

```jsx
import React, { useState, useEffect } from 'react';

function ExemploUseEffectSimples() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    setMensagem('O efeito do useEffect foi acionado!');
  }, []);

  return (
    <div>
      <h1>Exemplo useEffect Simples</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default ExemploUseEffectSimples;

## ----------------------------------------------------------------

import React, { useState, useEffect } from 'react';

function ExemploUseEffect() {
  const [contador, setContador] = useState(0);

  // useEffect é usado para executar ação quando o estado contador muda
  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <div>
      <h1>Exemplo useEffect</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default ExemploUseEffect;

## ----------------------------------------------------------------