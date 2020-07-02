import React, {Component } from 'react';

import api from '../../services/api';
import Axios from 'axios';

export default class Main extends Component{
    

    state = {
        bairro: '',
        cep: '',
        complemento: '',
        gia: '',
        ibge: '',
        localidade: '',
        logradouro: '',
        uf: '',
        unidade: ''
    }
    
    getCEP = async (cep) => {
        const response =  await api.get(cep + '/json');
        this.setState({bairro: response.data.bairro})
        this.setState({cep: response.data.cep})
        this.setState({complemento: response.data.complemento})
        this.setState({gia: response.data.gia})
        this.setState({ibge: response.data.ibge})
        this.setState({localidade: response.data.localidade})
        this.setState({logradouro: response.data.logradouro})
        this.setState({uf: response.data.uf})
        this.setState({unidade: response.data.unidade})
    }

    getText = () =>{
        this.getCEP(document.getElementById("buscar").value);
    }

    render(){
        return(
            <div>
                <div>
                    <br/>
                    <input id="buscar"></input> 
                    <br/>
                </div>
                <div>
                    <br/>
                    <button className="button6" onClick={this.getText}> Buscar CEP </button>
                    <br/>   
                </div>
                <div>
                    <br/>
                    <br/>
                    Bairro: { this.state.bairro }<br/>
                    CEP: { this.state.cep }<br/>
                    Complemento: { this.state.complemento }<br/>
                    GIA: { this.state.gia }<br/>
                    IBGE: { this.state.ibge }<br/>
                    Localidade: { this.state.localidade }<br/>
                    UF: { this.state.uf }<br/>
                    Unidade: { this.state.unidade }<br/>
                </div>
                
            </div>
        )
    }
}