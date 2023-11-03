## useCallback 
- É usado para memorizar funções, evitando que sejam recriadas a cada renderização de um componente. Isso pode melhorar o desempenho e a eficiência, especialmente quando funções são passadas como props para componentes filhos, garantindo que essas funções não sejam recriadas a cada renderização, a menos que as dependências mudem. Em resumo, useCallback é útil para otimizar o desempenho em situações em que funções são passadas como propriedades e não precisam ser recriadas desnecessariamente.
- 
## Exemplo abaixo de useCallback 

## ----------------------------------------------------------------

```jsx
import React, { useState, useCallback } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  // Use useCallback para memorizar a função de incremento
  const incremento = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incremento}>Incrementar</button>
    </div>
  );
}

export default Contador;

## ----------------------------------------------------------------

import React, { useState, useCallback } from 'react';

function GeradorDeNumeros() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);

  // Use useCallback para memorizar a função de geração de números aleatórios
  const gerarNumeroAleatorio = useCallback(() => {
    const novoNumero = Math.floor(Math.random() * 100);
    setNumeroAleatorio(novoNumero);
  }, []);

  return (
    <div>
      <h1>Número Aleatório: {numeroAleatorio}</h1>
      <button onClick={gerarNumeroAleatorio}>Gerar Número Aleatório</button>
    </div>
  );
}

export default GeradorDeNumeros;

## ----------------------------------------------------------------
