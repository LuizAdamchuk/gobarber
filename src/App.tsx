import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
// import SignUP from './pages/SignUP';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);
export default App;
