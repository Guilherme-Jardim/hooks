## useState

- Permite criar e controlar estados em componentes.
- É usado para armazenar informações relevantes, como valores de variáveis, configurações, status e qualquer outro dado necessário para o funcionamento do programa.
- O useState permite que você crie estados em componentes React e reaja a mudanças nesses estados, atualizando a interface do usuário de acordo com as alterações nos dados. Em resumo, o useState é usado para gerenciar e atualizar informações dinâmicas em componentes React.

## Exemplo abaixo de useState 

## ----------------------------------------------------------------

```jsx
import React, { useState } from 'react';

function ContadorSimples() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador Simples</h1>
      <p>Contagem: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default ContadorSimples;

## ----------------------------------------------------------------
