import React from "react";
import steps from '../helpers/steps'
import { ParticipantsStep } from './ParticipantsStep'
import { CategoryStep } from './CategoryStep'
import { PriceStep } from './PriceStep'
import { ActivityStep } from './ActivityStep'

export const Body = ({currentStep, formData, setFormData}) => {

  const StepDisplay = (e) => {
    switch(currentStep){
      case steps.category:
        return <CategoryStep formData={formData} setFormData={setFormData}/>
      case steps.participants:
        return <ParticipantsStep formData={formData} setFormData={setFormData}/>
      case steps.price:
        return <PriceStep formData={formData} setFormData={setFormData}/>
      case steps.activity:
        return <ActivityStep {...formData.activity}/>
      default:
        break;
    }
  }

  return (
    <div className="m-4">
      {StepDisplay()}
    </div>
  )
}