import React from 'react';

const Form = props => {
  return(
    <div className="columns">
      <div className="columns small-2"></div>
      <form className="row columns small-10">
        <input
          type="text"
          onChange={props.handleName}
          placeholder="name"/>
        <select onChange={props.handleType}>
          <option value="greeting">Greeting</option>
          <option value="goodbye">Goodbye</option>
        </select>
      </form>
    </div>
  )
}

export default Form;
