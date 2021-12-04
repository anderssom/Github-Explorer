import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../page/Dashcboard';

import Repository from '../page/Repository';

const Rotas: React.FC = () => (

    <Switch>

        <Route path="/" exact component={Dashboard}   />
        <Route path="/repositories/:repository+" component={Repository}/>

    </Switch>
)

export default Rotas
