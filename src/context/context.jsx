import React from 'react';

const Context = React.createContext();

const Provider = ({ children }) => {
  const questions = [
    {
      id: 'p1',
      question: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      answer: 'React.createElement()',
    },
    {
      id: 'p2',
      question: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      answer: 'import Component from "./Component"',
    },
    {
      id: 'p3',
      question: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      answer: 'useFetch()',
    },
    {
      id: 'p4',
      question: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      answer: 'use',
    },
  ];

  return (
    <Context.Provider
      value={{
        questions,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
