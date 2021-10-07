import Cookie from 'js-cookie'
import { useState, UseState } from 'react';

import Contador from '../contador'
import { Container, RemoverIcon } from './styled'

export default function CarrinhoItem(props) {
    const [produto, setProduto] = useState(props.info);

    function alterarQtd(qtd) {
        setProduto({...produto, qtd})

        props.onUpdate(produto.id, qtd)
    }

    function remover() {
        props.onRemove(produto.id);
    }


    return (
        <Container>

            <div>
                <img className="capa" src={produto.imagem} alt="" />
                <Contador onChange={alterarQtd} value={produto.qtd} />
            </div>

            <div className="titulo">
                {produto.titulo}
            </div>

            <div className="preco">
                <span>Qtd</span> <br />
                {produto.preco}
            </div>

            <div className="remover"> <RemoverIcon onClick={remover} /> </div>

        </Container>
    )
}