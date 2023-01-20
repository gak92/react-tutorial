/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({names, department}) => {
  // First method: Create an array first
  // let names = [];

  // for(let name of props.names)
  // {
  //   names.push(<h1>
  //   Hello
  //               {name}
  //             </h1>);
  // }
  // return names;

  // Second method: Use map function
  return (
    <>
      Department:  {department}
      {names.map((name) => <h3>Hello {name}</h3>)}
      <button onClick={() => clickHandler(department)}>
        Click Me
      </button>
    </>
  );
};

const clickHandler = (department) => {
  console.log("clicked", department);
};

export default Hello;

Hello.propTypes = {
  names: PropTypes.array,
}

Hello.defaultProps = {
  department: "CS",
}