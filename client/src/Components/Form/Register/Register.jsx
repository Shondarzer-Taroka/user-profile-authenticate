import { useFormik } from "formik";
import { useState } from "react";
import convertToBase64 from "../../helper/convert";


const Register = () => {
    let [file,setFile]=useState()
    let formik=  useFormik({
        initialValues:{
             email:"abc@gmail.com",
             username:'abidurrahman',
             password:'123dsf'
        },
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async values=>{
            values:Object.assign(values,{profiel:file || ''})
            console.log(values);
            
        }
    })

    const upload=async(e)=>{
        let base64=await convertToBase64(e.target.files[0])
        setFile(base64)
    }
    return (
        <div>
            <form className="w-[350px] h-[360px] flex justify-center flex-col" onSubmit={formik.handleSubmit}>

                <div className="flex justify-start flex-col gap-2  border-2 p-6 ">
                    <div className="h-[30px] w-[100%] flex justify-between">
                        {/* <label htmlFor="name">Name</label> */}
                        <span>User Name</span>
                        <input {...formik.getFieldProps('username')} className="ml-2 h-full  p-4 rounded-lg border outline-0" type="text" name="" id="name" placeholder="enter your name" />
                    </div>
                    <div className="h-[30px] flex justify-between">
                        {/* <label htmlFor="email">Email</label> */}
                        <span>Email</span>
                        <input {...formik.getFieldProps('email')}  className="ml-2 h-full p-4 rounded-lg border outline-0" type="text" name="" id="email" placeholder="enter your name" />
                    </div>
                    <div className="h-[30px] flex justify-between">
                        {/* <label htmlFor="email">Email</label> */}
                        <span>Photo</span>
                        <input onChange={upload} className="ml-2 h-full rounded-lg w-full border outline-0" type="file" name="" id="email" placeholder="enter your name" />
                    </div>
                    <div className="h-[30px] flex justify-between">
                        <label htmlFor="password">Password</label>
                        <input {...formik.getFieldProps('password')}  className="ml-2 h-full p-4 rounded-lg border outline-0" type="password" name="" id="password" placeholder="enter your name" />
                    </div>
                    <div className="flex justify-start">
                    <input type="submit" className="bg-violet-600 text-white px-3 py-2 shadow-md rounded-lg" value={'submit'} name="" id="" />
                   </div>
                </div>
              
            </form>
        </div>
    );
};

export default Register;