import toast from "react-hot-toast";

/** validate register usre*/


 export async function usernamevalidated(values) {
   let error= usernameVerify({},values)
   return error
 }

 function usernameVerify(error={},values) {
    if (!values.username) {
        error.username= toast.error('Username is required..!')
    }else if (values.username.includes(' ')) {
        error.username=toast.error('Invalid username')
    }
    return error
 }

 export async function passwordValidated(values){
    let error= passwordVerify({},values)
    return error
 }

 function passwordVerify(error={},values) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (!values.password) {
        error.password=toast.error('password is required')
    }else if (values.password.includes(" ")) {
        error.password=toast.error('Invalid password')
    }
    else if (values.password.length<4) {
        error.password=toast.error('password value must more than 3')
    }
    else if (!specialCharPattern.test(values.password)) {
        error.password=toast.error('special value required')
    }

 }