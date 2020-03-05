import React from 'react';

const ImgCard = ({ goTo, profile, show_icon }) => (
  <div className="card" style={{width: 18 + 'rem'}}>
    <img src={profile} className="card-img-top"/>
    <div className="card-body rounded mx-auto d-block">
      <a className="card-link" href="https://scholar.google.com/citations?user=ncU8YRsAAAAJ&hl=el&oi=ao">
        <i className="ai ai-google-scholar ai-2x"></i>
      </a>
      <a style={{ 'display': (show_icon ? 'block' : 'none') }} className="card-link" href="https://github.com/pkiourti/">
        <i className="fab fa-github fa-2x" style={{ /*olor: 'black'*/ }} aria-hidden="true"></i>
      </a>
      <a className="card-link" href="mailto:pkiourti@bu.edu">
        <i className="fas fa-envelope fa-2x"></i>
      </a>
    </div>
  </div>
)

export default ImgCard;
