import React, {useState} from 'react'
import './CompanyInfo.css';

// Case study
// 1. UEN Format 8 digit + 1 alphabet & Name Format - String
const CompanyInfo = () => {
    const [companyUEN, setCompanyUEN] = useState("");
    const [companyName, setCompanyName] = useState("");
const [isValid, setIsValid] = useState(false);
let validationForm = () =>{
 const regex =/^[0-9] {8} [A-Za-z]$/;
 const isUENValid = regex.test(companyUEN);
 const isNameValid = companyName.length > 0; 
 setIsValid(isUENValid && isNameValid);
};

const handleUENChange = (e) => {
        setCompanyUEN(e.target.value);
        validationForm();
      };
    
      const handleNameChange = (e) => {
        setCompanyName(e.target.value);
        validationForm();
      };





  return (
    <form >
 <div>
  <h2 className='company'>Company Information</h2>
<lable htmlfor='UEN'>
    Company UEN
</lable>
<input type='text' id='UEN' name='Company_UEN' value={companyUEN} placeholder='e.g., 34341256G' onChange={handleUENChange}/>

<lable htmlfor='Name'>
    Company Name
</lable>
<input type='text' id='Name' name='Company_Name' value={companyName}    onChange={handleNameChange}placeholder="Enter Company Name" />



</div>

    </form>
   
  )
}

export default CompanyInfo