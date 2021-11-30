import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './router';
import GlobalAtyle from './styles/global'

const App: React.FC = () => (

<>
<BrowserRouter>
  <Rotas />
</BrowserRouter>
<GlobalAtyle/>
</>
)

export default App;
