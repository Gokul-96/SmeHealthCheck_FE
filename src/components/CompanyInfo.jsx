import React, {useState} from 'react'


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
    <form onSubmit={handleSubmit}>
 <div>
<lable htmlfor='UEN'>
    Company UEN
</lable>
<input type='text' id='UEN' name='Company_UEN' value={UEN} placeholder='e.g., 34341256G' onChange={handleUENChange}/>

<lable htmlfor='Name'>
    Company Name
</lable>
<input type='text' id='Name' name='Company_Name' value={Name}    onChange={handleNameChange}placeholder="Enter Company Name" />



</div>

    </form>
   
  )
}

export default CompanyInfo