import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { usernamevalidated } from "../../helper/validate";
import { Toaster } from "react-hot-toast";


const UserName = () => {
    let formik=useFormik({
        initialValues:{
            username:''
        },
        validateOnBlur:false,
        validateOnChange:false,
        validate:usernamevalidated,
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
                            <input type="text" {...formik.getFieldProps('username')} className=" p-4 rounded-md border outline-0" placeholder="Enter username"  id="username" />
                            <input type="submit" value={"Let's Go"} className="p-4 rounded-md text-white bg-violet-500" />
                        </div>
                    </form>
                    <span>Not account? <Link to={'/register'} className="text-red-500">Register</Link> </span>
                </div>
            </div>
        </div>
    );
};

export default UserName;