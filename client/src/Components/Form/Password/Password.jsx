import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { passwordValidated } from "../../helper/validate";
import { Toaster } from "react-hot-toast";


const Password = () => {
    let formik=useFormik({
        initialValues:{
            password:''
        },
        validateOnBlur:false,
        validateOnChange:false,
        validate:passwordValidated,
        onSubmit:async (values)=>{
            console.log(values);  
        }
    })
    return (
        <div className="bg-slate-100 h-screen flex justify-center items-center">
            <Toaster position="top-center"></Toaster>
            <div className="w-[300px] border text-center p-6 shadow-lg">
                <h1 className="text-3xl font-semibold font-serif my-3">Hello Again</h1>
                <p className="text-gray-400 font-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque modi harum dolores rem.</p>
                <div className="">
                    <img src="" className="w-[70px] h-[70px] mx-auto my-3 rounded-full border shadow-sm" alt="" />
                    {/* <input type="file" /> */}
                </div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <input type="password" {...formik.getFieldProps('password')} className=" p-4 rounded-md border outline-0" placeholder="Enter password"  id="username" />
                            <input type="submit" value={"sign in"} className="p-4 rounded-md text-white bg-violet-500" />
                        </div>
                    </form>
                    <span>Forgotten?<Link to={'/recovery'} className="text-red-500">Recovery</Link> </span>
                </div>
            </div>
        </div>
    );
};

export default Password;