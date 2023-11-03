## fowardRef 
- É uma função em React que permite que um componente pai acesse o DOM ou componentes filhos internos. Com forwardRef, você pode passar uma ref (referência) diretamente para um componente filho, permitindo que o componente pai acesse e interaja com o DOM do filho. Isso é útil quando você precisa controlar ou medir elementos dentro de um componente filho a partir do componente pai. É especialmente útil quando você está trabalhando com componentes de terceiros que não expõem diretamente suas refs.
- 
## Exemplo abaixo de fowardRef 

## ----------------------------------------------------------------

```jsx
import React, { forwardRef, useRef } from 'react';

// Componente filho que recebe uma ref e um valor
const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Associa a ref do componente pai à ref interna do input
  // Isso permite que o componente pai acesse o input diretamente
  ref.current = inputRef;

  return <input ref={inputRef} />;
});

// Componente pai
function ParentComponent() {
  const childRef = useRef(null);

  const focusChildInput = () => {
    childRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={focusChildInput}>Focar no input do filho</button>
    </div>
  );
}

export default ParentComponent;


## ----------------------------------------------------------------

- Neste exemplo simplificado, o ChildComponent recebe uma ref como propriedade, associa essa ref ao seu input interno e permite que o componente pai acesse o input diretamente. Quando o botão é clicado, o input do filho é focado.

## ----------------------------------------------------------------
