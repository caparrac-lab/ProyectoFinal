import React from 'react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-container">
       <h1>BudgetEase Solutions</h1>
       <p>Bienvenido a tu planificador de conferencias...</p>
       <button onClick={onGetStarted}>Comenzar</button>
    </div>
  );
};

export default LandingPage;