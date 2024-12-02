import React,{useState} from 'react'
import ApplicantInfo from './components/ApplicantInfo'
import CompanyInfo from './components/CompanyInfo'
import Header from './components/Header'
import "./App.css"
const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStep1Valid, setIsStep1Valid] = useState(false);
  const handleNextStep = (isValid) => {
    if (isValid) {
      setIsStep1Valid(true);
      setCurrentStep(2);
    }
  };
  return (
    <div className="app-container">
      <Header/>
      <div className="steps-container">
        <div className="step-header">
          <div
            className={`step-number ${isStep1Valid ? "step-complete" : "step-incomplete"}`}
          >
            {isStep1Valid ? "✔" : "1"}
          </div>
          <span>Company Information</span>
        </div>
        <div className="step-header">
          <div
            className={`step-number ${currentStep > 1 ? "step-complete" : "step-incomplete"}`}
          >
            {currentStep > 1 ? "✔" : "2"}
          </div>
          <span>Applicant Information</span>
        </div>
      </div>

      {currentStep === 1 && <CompanyInfo onNext={handleNextStep} />}
      {currentStep === 2 && <ApplicantInfo />}
    </div>
  );
};

export default App