import React from 'react';
import { FacebookIcon, FacebookShareButton, FacebookMessengerIcon, FacebookMessengerShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

function ShareSection() {
  const shareUrl = 'http://localhost:3000/'; // Substitua pela URL do seu site

  return (
    <div className="slim-landing-rtl" style={{ backgroundColor: '#f0f2f7', paddingTop: '30px', paddingBottom: '30px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12">
            <figure className="text-center">
              <h1>
                <i className="fa fa-link mg-r-10" aria-hidden="true"></i>
                Compartilhe com AMIGOS
              </h1>
              <h6>Agora chegou a sua hora de compartilhar com seus amigos esse santinho.</h6>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <FacebookShareButton className="mx-2" url={shareUrl}>
                    <FacebookIcon size={32} />
                </FacebookShareButton>
                <FacebookMessengerShareButton className="mx-2" url={shareUrl}>
                    <FacebookMessengerIcon size={32} />
                </FacebookMessengerShareButton>
                <WhatsappShareButton className="mx-2" url={shareUrl}>
                    <WhatsappIcon size={32} />
                </WhatsappShareButton>
              </div>
              <br />
              <center>
                <a href={`https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/&amp;size=200x200`} target="_blank" rel="noopener noreferrer">
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/&amp;size=200x200`} alt="QR Code" className="img-thumbnail" />
                </a>
              </center>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareSection;
