import React, {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

const Form = () => {
    const[isSubmit, setIsSubit] = useState(false);

    function submitForm()
    {
        setIsSubit(true);
    }
    return (
        <div>
            {!isSubmit ? <FormSignup submitForm =
            {submitForm}/> : <FormSuccess/>}
        </div>
    )
}

export default Form;
