import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// rafce

// Arrow Function
// const App2 = () => <h1>Olá, Mundo!<h1>;

// Nomeação de componente
// PascalCase = Todas as palavras são juntas a primeira Maiúscula = NomeDoArquivoSempreDeveSeguirDessaForma

//  Nomeação de Variavel, Funçõo...
// camelCase

// export default, posso importar com qualquer nome e sem chave
// export "sem default", só posso importar entre chaves e com o nome exportado

// Self closing ta
// <Header></Header>
// <Header/>

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// item-list__header
// Nomes compostos são separados por -

// Tag vazia em React se chama fragment ou fragmento

// Componentes recebem "props"

{
  /* {items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )} */
}
// {Array(items)
//           .fill()
//           .map((currentValuee, index) => (
//             <SingleItem key={`${title}-${index}`} />
//           ))}

// Spread operator
// ...

// Quando componetes se re-renderizão?
// Uma das ocasiões é quando uma variavel de estado usado por esse componente é utilizado
//  Hook - useState
