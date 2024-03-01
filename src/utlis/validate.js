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
    }
    // else if(){
    //     errors.email = "Input email is not valid!";
    // }

    if(!values.password){
        errors.password = "Password is required!";
    }
    // else if(){
    //     errors.password = "Password should be greator than 3 char and less than 10 chars";
    // }
    
    if(values.cpassword !== values.password){
        errors.cpassword = "Password mismatch!";
    }

    return errors;
}