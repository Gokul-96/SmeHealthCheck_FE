import React from 'react'
import ApplicantInfo from './components/ApplicantInfo'
import CompanyInfo from './components/CompanyInfo'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <CompanyInfo/>
      <ApplicantInfo/>
      
    </div>
  )
}

export default App