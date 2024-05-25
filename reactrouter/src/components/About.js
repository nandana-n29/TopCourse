import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate();
    function clickHandler()
    {
        navigate("/support");
    }
    function back()
    {
        navigate(-1)
    }
  return (
    <div>
        <div>
      ABOUT
      <button onClick={clickHandler} >go to support</button>
      <button onClick={back} >go back</button>

    </div>
    </div>
  )
}

export default About
