import React from 'react'
import Footer from './Footer';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Banner from './Banner';
import QuestionContainer from './QuestionContainer';

function AppointmentScheduler() {
  return (
    <div>
      <Header/>
      <Banner/>
      <QuestionContainer/>
    <Footer/>
    </div>
  )
}

export default AppointmentScheduler