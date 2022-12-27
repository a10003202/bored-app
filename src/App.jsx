import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Activity from './helpers/activity'
import { ActivityStep } from './components/ActivityStep'
import steps from './helpers/steps'
import { ParticipantsStep } from './components/ParticipantsStep'
import { CategoryStep } from './components/CategoryStep'
import { PriceStep } from './components/PriceStep'

function App() {
  const [formData, setFormData] = useState({
    activity: null,
    type: '',
    participants: 0,
    maxprice: 0
  })
  const [currentStep, setCurrentStep] = useState(0)

  const Titles = [
    '¿Que tipo de actividad quieres realizar?',
    '¿Cuantos participantes son?',
    '¿Cual es tu presupuesto para la actividad?',
  ]

  const handleSubmit = async () => {
      let response = await Activity.search(formData);
      console.log(response)
      setFormData({...formData, activity: response})
  };

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

  const FooterDisplay = () => {
    switch(currentStep){
      case steps.activity:
        return <div>
        <button className="btn-primary-indigo m-2"
          disabled={currentStep == 0} onClick={ restart }>
          Buscar nueva actividad
        </button>
        <button className="btn-primary-indigo m-2"
          onClick={ handleSubmit }>
          Buscar otra actividad
        </button>
      </div>
      default:
        return <div>
          <button disabled={currentStep == 0} onClick={ prevStep }
            className="btn-primary m-2">
              Anterior
          </button>
          <button onClick={ nextStep }
            className="btn-primary m-2">
            {currentStep == Titles.length - 1 ? 'Buscar' : 'Siguiente'}
          </button>
        </div>
        break;
    }
  }

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
      <div className="flex flex-col items-center justify-center m-4">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>{Titles[currentStep]}</h1>
      </div>
      <div className="m-4">
        {StepDisplay()}
      </div>
      <div className="m-4">
        {FooterDisplay()}
      </div>
    </div>
  )
}

export default App
