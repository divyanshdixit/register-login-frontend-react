// validate function to validate the form field values:

export const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!values.uname){
        errors.uname = "Username is required!";
    }else if(values.uname.length < 3){
        errors.uname = "Username length must be greator than 2";
    }

    if(!values.email){
        errors.email = "Email is required!";
    }else if(!emailRegex.test(values.email)){
        errors.email = "Please provide valid email ID!";
    }

    if(!values.password){
        errors.password = "Password is required!";
    }else if(values.password.length < 4){
        errors.password = "Password must contain greator than 4 chars!";
    }
    
    if(!values.cpassword){
        errors.cpassword = "Password is required!";
    }else if(values.cpassword !== values.password){
        errors.cpassword = "Password is not matching!";
    }

    return errors;
}