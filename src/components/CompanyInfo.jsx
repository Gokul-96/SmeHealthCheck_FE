import React, {useState, useEffect} from 'react'
// import './CompanyInfo.css';

// Case study
// 1. UEN Format 8 digit + 1 alphabet & Name Format - String
const CompanyInfo = ({onNext}) => {
    const [companyUEN, setCompanyUEN] = useState("");
    const [companyName, setCompanyName] = useState("");
const [isValid, setIsValid] = useState(false);
const validateUEN = (value) => /^[0-9]{8}[A-Za-z]$/.test(value);
const validateName = (value) => value.trim().length > 0;

useEffect(() => {
  // Validate both fields in real-time
  const isUENValid = validateUEN(companyUEN);
  const isNameValid = validateName(companyName);
  setIsValid(isUENValid && isNameValid);

  // If valid, trigger the `onNext` function
  if (isUENValid && isNameValid) {
    onNext(true); // Move to the next step
  }
}, [companyUEN, companyName, onNext]);


const handleUENChange = (e) => {
        setCompanyUEN(e.target.value);
        validationForm();
      };
    
      const handleNameChange = (e) => {
        setCompanyName(e.target.value);
        validationForm();
      };





  return (
   <form className="step-form">
      <div className="form-group">
        <label htmlFor="company-uen">Company UEN</label>
        <input
          type="text"
          id="company-uen"
          value={companyUEN}
          onChange={handleUENChange}
          placeholder="e.g., 12345678L"
          className={isValid || companyUEN === "" ? "" : "error"}
        />
        {companyUEN && !validateUEN(companyUEN) && (
          <p className="error-text">UEN must be 8 digits followed by a letter.</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="company-name">Company Name</label>
        <input
          type="text"
          id="company-name"
          value={companyName}
          onChange={handleNameChange}
          placeholder="Enter company name"
          className={isValid || companyName === "" ? "" : "error"}
        />
        {companyName && !validateName(companyName) && (
          <p className="error-text">Company name is required.</p>
        )}
      </div>
    </form>
  );
};
export default CompanyInfo