## useMemo 
- É usado para memoizar valores calculados, como resultados de cálculos ou transformações em um componente. Ele evita o cálculo repetido desses valores em renderizações subsequentes, economizando recursos e melhorando o desempenho. Em resumo, useMemo permite que você otimize a computação de valores que não precisam ser recalculados a cada renderização, com base em dependências específicas.
  
## Exemplo abaixo de useMemo 

## ----------------------------------------------------------------

```jsx
import React, { useState, useMemo } from 'react';

function CalculadoraQuadrado() {
  const [numero, setNumero] = useState(0);

  // Use useMemo para calcular o quadrado do número
  const quadrado = useMemo(() => {
    return numero * numero;
  }, [numero]);

  return (
    <div>
      <h1>Calculadora de Quadrado</h1>
      <label>Digite um número: </label>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
      <p>O quadrado de {numero} é {quadrado}</p>
    </div>
  );
}

export default CalculadoraQuadrado;

## ----------------------------------------------------------------

import React, { useState, useMemo } from 'react';

function SomaArray() {
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);

  // Use useMemo para calcular a soma dos números no array
  const soma = useMemo(() => {
    return numeros.reduce((acc, curr) => acc + curr, 0);
  }, [numeros]);

  return (
    <div>
      <h1>Soma de Array</h1>
      <p>Números: {numeros.join(', ')}</p>
      <p>Soma: {soma}</p>
      <button onClick={() => setNumeros([...numeros, numeros.length + 1])}>
        Adicionar Número
      </button>
    </div>
  );
}

export default SomaArray;


## ----------------------------------------------------------------
