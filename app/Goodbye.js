import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton'

const Goodbye = props => {
  return(
    <div>
      <BackButton />
      <h1>Goodbye LeRon James, enjoy your Lagavulin 16.</h1>
    </div>
  )
}

export default Goodbye;
