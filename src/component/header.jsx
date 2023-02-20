import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Header extends Component {

render() {
  return (
    <div className="header">
      <div className="header-left">
          <h1>IFFAH FATINNY ABDUL BASIR</h1>
          <h3>B.Sc. (Hons.) Computational Mathematics</h3>
        </div>
        <div className="header-right">
          <div><FontAwesomeIcon icon={faPhone}/> (+60)17-6806975</div>
          <div><FontAwesomeIcon icon={faEnvelope}/> iffah29@gmail.com </div>
          <div><FontAwesomeIcon icon={faLinkedin}/> @iffahfatinnyabdulbasir </div>
          <div><FontAwesomeIcon icon={faGithub}/> iffahfatinny </div>
        </div>
    </div>
  )
 }
}