import { useState } from 'react';
import './App.css';

function App() {

  const[formData, setFormData] = useState({
    name : "",
    email : "",
    password : "",
    confirm_password : "" 
  })

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((previous) => {
      return {...previous, [name] : value};
    })
  }


  return (
    <div>
      <form>
        <fieldset>
          <h2>Registration Form</h2>

          <div><input type='text' name='name' placeholder='Enter Your Name' value={formData.name} onChange={handleChange}/></div>
          <div><input type='email' name='email' placeholder='Enter Your Email' value={formData.email} onChange={handleChange}/></div>
          <div><input type='password' name='password' placeholder='Enter Password' value={formData.password} onChange={handleChange}/></div>
          <div><input type='password' name='confirm_password' placeholder='Confirm Password' value={formData.confirm_password} onChange={handleChange} /></div>
          <div><input class='submit-btn' type='submit' value='Create Account'/></div>
          <p>{`My Name ${formData.name} is and Email is ${formData.email}`}</p>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
