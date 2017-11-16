import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton'

const Home = props => {
  return(
    <div>
      <p className="sub-welcome">WELCOME TO</p>
      <h1 className="page-title">Ron-
        <iframe src="https://giphy.com/embed/xUPGcMtyJpiEfl5wSA" width="50" height="50" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <a href="https://giphy.com/stickers/imoji-ron-swanson-xUPGcMtyJpiEfl5wSA"></a>
        -Matic</h1>
    </div>
  )
}

export default Home;
