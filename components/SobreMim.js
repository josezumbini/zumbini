import React from 'react';
import { FaAddressCard } from 'react-icons/fa';


function SobreMim() {
  return (
    <div className="slim-landing-skin">
        <div className="container" style={{ boxSizing: 'border-box', marginRight: 'auto', marginLeft: 'auto' }}>
            <h1 style={{ textAlign: 'center', color: '#212529' }}>
                <FaAddressCard className="mg-r-10" aria-hidden="true" style={{ marginRight: '10px' }}/>
                Um pouco sobre mim.
            </h1>
            <h6 align="justify" style={{ textAlign: 'center', lineHeight: 1.6, color: '#868ba1' }}>
                Me chamam pelo sobrenome que é Zumbini, ninguém me conhece por José. Sou pré candidato a vereador.
                Tenho 62 anos, sou casado e pai de 5 filhos.
                Sou Técnico em Administração de Empresas tendo estudado na Escola de Comércio Candelária, antes disso no Don José e Randolfo.
                Estudei Administração na PUC Campinas, Direito (apenas 2 anos) na FADITU e Propaganda e Marketing no Anhembi Morumbi.
                Sou Bacharel em Teologia pela CEEC - Centro Evangélico de Educação e Cultura com extensão em Capelânia Hospitalar pela Unicamp.
                Desde os 24 anos de idade desenvolvo serviços comunitários tendo sido Presidente de Associação Amigos de Bairro e do primeiro Conselho Municipal de Saúde do município nessa ocasião.
                Também representei o Instituto Brasileiro Pro Educação Trabalho e Desenvolvimento durante 6 anos, em toda a região metropolitana de Campinas - o ISBET, encaminhanfo jovens aprendizes e estagiários para empresas, inserindo-os ao mercado de trabalho.
                Desenvolvi trabalhos voluntários em clube de serviços no município ocasião em que, com muita honra tive a oportunidade de presidir.
                Fui funcionário público na década de 90 quando tive a oportunidade de ter contato valioso com o poder executivo na gestão de um grande político de nome Clain Ferrari, exercendo atividades em sua Assessoria de Imprensa.
                Também fui assessor parlamentar de alguns vereadores, onde aprendi toda a dinâmica do legislativo.
                Desenvolvo há mais de 34 anos serviços de divulgação em nossa cidade. Sou entregador de panfletos.
            </h6>
            <hr />
            <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-6 mg-b-20"  style={{ marginBottom: '20px' }}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/XqjkFJAwZoc?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SobreMim;
