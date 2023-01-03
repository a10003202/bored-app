import React from "react";
import reactLogo from '../assets/react.svg'

export const Header = ({currentStep, Titles}) => {

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>{Titles[currentStep]}</h1>
    </div>
  )
}