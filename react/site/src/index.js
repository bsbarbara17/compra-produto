import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles.css'

import App from './InfoX/home'
import DetalheProduto from './InfoX/detalheProduto'
import Carrinho from './InfoX/carrinho'

import Contador from './InfoX/comunicacaoComps/contador'
import Pedido from './InfoX/comunicacaoComps/finalizacaoPedido/pedido'
import ConclusaoPedido from './InfoX/comunicacaoComps/finalizacaoPedido/conclusao';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={App} />
                <Route path="/detalhe" component={DetalheProduto} />
                <Route path="/carrinho" component={Carrinho} />

                <Route path="/infoX/contador" exact={true} component={Contador} />
                <Route path="/infoX/pedido" component={Pedido} />
                <Route path="/infoX/conclusao" component={ConclusaoPedido} />
            </Switch>
        </BrowserRouter>
    </StrictMode>,
    rootElement
);
