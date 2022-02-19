import React, { useState } from 'react';
// import '../shared/exam.css';
import SignupForm from '../components/SignupForm';
import {Grid} from '../elements';

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Grid width="50%" margin="auto">
        {!isSubmitted ? <SignupForm submitForm={submitForm} /> : <></>}
      </Grid>
    </>
  );
};

export default Signup;