import { useState } from 'react'
import './App.css'
import Activity from './helpers/activity'
import steps from './helpers/steps'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'

function App() {
  const [formData, setFormData] = useState({
    activity: null,
    type: '',
    participants: 0,
    maxprice: 0
  })
  const [currentStep, setCurrentStep] = useState(0)

  const Titles = [
    'What kind of activity do you want to do?',
    'How many participants are there?',
    'What is your budget for the activity?',
  ]

  const handleSubmit = async () => {
      let response = await Activity.search(formData);
      console.log(response)
      setFormData({...formData, activity: response})
  };

  const prevStep = () => {
    setCurrentStep( (step) => step - 1 )
  }

  const nextStep = () => {
    if(currentStep == Titles.length - 1){
      handleSubmit()
    }
    setCurrentStep( (step) => step + 1 )
  }

  const restart = () => {
    setCurrentStep(steps.category);
    setFormData({
      activity: null,
      type: '',
      participants: 0,
      maxprice: 0
    });
  }

  return (
    <div className="App">
      <Header Titles={Titles} currentStep={currentStep}/>
      <Body currentStep={currentStep} formData={formData} setFormData={setFormData}/>
      <Footer Titles={Titles} currentStep={currentStep} handleSubmit={handleSubmit} restart={restart} prevStep={prevStep} nextStep={nextStep}/>
    </div>
  )
}

export default App
