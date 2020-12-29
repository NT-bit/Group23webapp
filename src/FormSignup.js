import React from 'react';
import useForm from "./useForm";
import validate from "./validateInformation";

const FormSignup = ({submitForm}) => {

    const{handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return (
        <div className="register">
        <div className="form-register">
          <h1>Create Account 2 something </h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="firstNameInput">
              <input type="text" placeholder="First Name" name="firstName" id="firstName"/>
            </div>
            <div className="lastNameInput">
              <input type="text" placeholder="Last Name" name="lastName" id="lastName"/>
            </div>
            <div className="userNameInput">
              <input type="text" placeholder="Username" name="userName" id="userName"/>
            </div>
            <div className="emailInput">
              <input type="email" placeholder="Email" name="email" id="email"/>
            </div>
            <div className="phoneInput">
              <input type="tel" placeholder="Phone Number" name="phone" id="phone"/>
            </div>
            <div className="passwordInput">
              <input type="password" placeholder="Password" name="password" id="password" 
              value={values.password} 
              onChange={handleChange}
              />
              {errors.password && <span className="errorMessage">{errors.password}</span>}
            </div>
            <div className="confirmpasswordInput">
              <input type="password" placeholder="Confirm password" name="confirmpassword" id="password2" 
              value={values.confirmpassword} 
              onChange={handleChange}
              />
               {errors.confirmpassword && <span className="errorMessage">{errors.confirmpassword}</span>}
            </div>
            <div className="createAccount">
              <button type="submit">Register Now</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default FormSignup;
