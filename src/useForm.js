import {useState, useEffect} from "react"

const useForm = (callback,validate) => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: ""
    });

    const[errors, setErrors] = useState({});
    const[isSubmit, setIsSubmit] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value 
        });
    };

    const handleSubmit = e => {
        e.preventDefault();


        setErrors(validate(values));
        setIsSubmit(true);
    };

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmit) {
            callback();
          }
        },
        [errors]
      );

    return{handleChange, values, handleSubmit, errors};
};

export default useForm;