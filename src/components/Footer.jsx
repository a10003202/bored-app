import React from "react";
import steps from '../helpers/steps'

export const Footer = ({currentStep, Titles, restart, prevStep, nextStep, handleSubmit}) => {

  const FooterDisplay = () => {
    switch(currentStep){
      case steps.activity:
        return <div>
        <button className="btn-primary-indigo m-2"
          disabled={currentStep == 0} onClick={ restart }>
          Find new activity
        </button>
        <button className="btn-primary-indigo m-2"
          onClick={ handleSubmit }>
          Find another activity
        </button>
      </div>
      default:
        return <div>
          <button disabled={currentStep == 0} onClick={ prevStep }
            className="btn-primary m-2">
              Previous
          </button>
          <button onClick={ nextStep }
            className="btn-primary m-2">
            {currentStep == Titles.length - 1 ? 'Search' : 'Next'}
          </button>
        </div>
        break;
    }
  }

  return (
    <div className="m-4">
      {FooterDisplay()}
    </div>
  )
}