import React from 'react';
import { FaAddressCard } from 'react-icons/fa';


function SobreMim() {
  return (
    <div className="slim-landing-skin">
        <div className="container">
            <h1>
                <FaAddressCard className="mg-r-10" aria-hidden="true" />
                Um pouco sobre mim.
            </h1>
            <h6 align="justify">Sou nascido em Ribeirão Preto,  tenho 52 anos, pai de dois filhos e tenho uma Netinha.
            Sou Márcio Junqueira de Sousa, carinhosamente apelidado desde a infância de "Márcio Terror”.
            Terror pois cobro também nossas autoridades para melhorias para nossa comunidade, meu trabalho é em favor dos nossos bairros como Presidente de Associação de Moradores.
            Realizo há anos o projeto “Estamos Juntos” que além de gerar diversão e entretenimento, arrecada mantimentos para as entidades assistenciais.
            Estamos sempre buscando melhorias pra nossa população. 
            DEUS NO COMANDO SEMPRE!!!</h6>
            <hr />
            <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-6 mg-b-20">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/XqjkFJAwZoc?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SobreMim;
