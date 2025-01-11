import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as S from './styles/global.ts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <S.Container>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </S.Container>
);
