import React from 'react';
import Image from 'next/image';

import facebookicon from '../imgs/facebook-icon.png';
import instagramicon from '../imgs/instagram-icon.png';
import whatsappicon from '../imgs/whatsapp-icon.png';

function NomeLinks() {
    return (
        <div className="slim-landing-demo" style={{ backgroundColor: '#04417C', padding: '30px' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ marginTop: '-20px', color: '#EBC944', fontSize: '25px', textShadow: '2px 2px black' }}>
                    Pré-Candidato a Vereador
                </div>
                <div style={{ color: '#EBC944', fontSize: '45px', textShadow: '2px 2px black' }}>
                    <strong>Zumbini</strong>
                </div>
                <div style={{ color: '#EBC944', fontSize: '39px', marginTop: '-10px', textShadow: '2px 2px black' }}>
                    <strong></strong>
                </div>
                <div style={{ color: '#EBC944', fontSize: '20px', marginTop: '-10px', textShadow: '2px 2px black' }}>
                    <strong>NOVO</strong>
                </div>
                <hr />
                <div style={{ margin: '0 auto', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="https://www.facebook.com/ZumbiniOficial">
                        <Image src={facebookicon} alt="Facebook" style={{ width: '38px', height: '38px' }} />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://www.instagram.com/zumbinioficial">
                        <Image src={instagramicon} alt="Instagram" style={{ width: '38px', height: '38px' }} />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://api.whatsapp.com/send?phone=5519997113111&amp;text=Ol%C3%A1%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20Santinho%20Digital.%20">
                        <Image src={whatsappicon} alt="WhatsApp" style={{ width: '38px', height: '38px' }} />
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="mg-t-10" style={{ color: '#ffffff', fontSize: '15px' }}>
                    Conheça minhas redes sociais
                </div>
            </div>
        </div>
    );
}

export default NomeLinks;
