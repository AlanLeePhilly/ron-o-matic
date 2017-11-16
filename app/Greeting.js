import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton'

const Greeting = props => {
  return(
    <div>
      <BackButton />
      <h1>Hello Video Ron Demand!</h1>
    </div>
  )
}

export default Greeting;
