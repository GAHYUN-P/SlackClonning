import React, { useState } from 'react';
import '../shared/exam.css';
import ExamSignup from '../components/LoginForm';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {!isSubmitted ? <ExamSignup submitForm={submitForm} /> : <></>}
      </div>
    </>
  );
};

export default Login;