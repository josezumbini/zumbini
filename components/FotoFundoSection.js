import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import fotocandidato from '../imgs/foto-candidato.png';

const ImageComponent = styled.div`
  background-color:#999999;
  height:320px;
  background-image:url(/imgs/foto-fundo.png);
  background-attachment:fixed;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;


function FotoFundoSection() {
  return (
    <ImageComponent>
      <div className="container" style={{padding: 0}}>
        <div className="row" align="center">
          <div className="col-lg-12 mg-lg-t-0">
            <Image src={fotocandidato} alt="Zumbini" className="img-fluid" />
          </div>
        </div>
      </div>
    </ImageComponent>
  );
};

export default FotoFundoSection;
