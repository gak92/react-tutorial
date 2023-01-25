import React, { useRef, useState } from 'react'

const Hooks = () => {
  const [name, setName] = useState("Demo");
  const logo = useRef(null);

  const changeImage = () => {
    logo.current.style.transform = "rotate(15deg)";
  }
 
  return (
    <div>
      <h1>hook based components: {name}</h1> 
      <img src="../logo.svg" alt="logo" ref={logo} onClick={changeImage} />
      <br></br>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>     
    </div>
  )
}

export default Hooks;