import React, { Fragment } from 'react';

import Header from './components/sections/header/header.component';
import Main from './components/sections/main/main.component';

const App: React.FC = (): JSX.Element => (
  <Fragment>
    <Header />
    <Main />
  </Fragment>
);

export default App;
