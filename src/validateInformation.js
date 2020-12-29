export default function validateInformation(values)
{
    let errors = {}

    //password
    if(!values.password)
    {
        errors.password = "Password is required"
    } else if(values.password.length < 6){
        errors.password = "minimum 6 characters is required"
    }

    if(!values.confirmpassword){
        errors.confirmpassword = "Password is required"
    } else if(values.confirmpassword !== values.password) {
        errors.confirmpassword = "password do not match"
    }

    return errors;
}