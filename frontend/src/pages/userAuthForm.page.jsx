import { Link } from "react-router-dom";
import InputBox from "../components/input.component";
import googleIcon  from "../imgs/google.png"
import AnimationWrapper from "../common/page-animation";
import { useRef } from "react";
import { Toaster, toast} from "react-hot-toast"

const UserAuthForm = ( {type} ) => {

    const authForm = useRef();

    const handleSubmit = (e) =>{

        e.preventDefault();

        //regex
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email regex :) 
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;  //for password validation (at least one uppercase letter, one lowercase letter, one number)(thankyou google)


        // form data
        let form = new FormData(authForm.current)
        let formData = {};

        for(let [key, value] of form.entries()){
            formData[key] = value;
        }

        // console.log(formData);

        let{fullname, email, password} = formData;

        //form validation
        if(fullname){
            if(fullname.length < 3 )
        {
            return toast.error(" Fullname must be at least 3 letters long")
        }
        }
        if(!email.length){
            return toast.error("Enter Email")
        }
        if(!emailRegex.test(email)){
            return  toast.error("Invalid Email Address");
        }
        if(!passwordRegex.test(password)){
            return toast.error("password should be 6-20 characters long with a mumeric, 1 lowercase and 1 uppercase")
        }

    }

    return (

        <AnimationWrapper keyValue={type}>
        <section className="h-cover flex items-center justify-center">
            <Toaster/>
            <form ref={authForm} className="w-[80%] max-w-[400px]">
                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {type == "sign-in" ? "welcome back" : " join us today"}
                </h1>

                {
                    type != "sign-in" ?
                    <InputBox 
                        name="fullname"
                        type="text"
                        placeholder="full Name"
                        icon="fi-rr-user"
                    />
                    // <input /> lets use a custom input box
                    : ""
                }

                    <InputBox 
                        name="email"
                        type="email"
                        placeholder="email"
                        icon="fi-br-at"
                    />

                    <InputBox 
                        name="password"
                        type="password"
                        placeholder="password"
                        icon="fi-rr-lock"
                    />

                    <button
                        className="btn-dark center mt-14"
                        // type="submit"
                        onClick={handleSubmit}
                    >
                        { type.replace("-"," ") }
                    </button>

                    <div className="realtive w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                        <hr className="w-1/2 border-black"/>
                        <p className="">or</p>
                        <hr className="w-1/2 border-black"/>
                    </div>

                    <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center"
                    >
                        <img src={googleIcon} className="w-5"/>
                         continue with google 
                    </button>

                    {
                        type == "sign-in"?
                        <p className="mt-6 text-dark-grey text-xl text-center">
                            Don't have an account?
                            <Link to="/signup" className="underline texxt-black text-xl ml-1">
                                join us today
                            </Link>
                        </p>
                        :
                        <p className="mt-6 text-dark-grey text-xl text-center">
                            Already a member?
                            <Link to="/signin" className="underline texxt-black text-xl ml-1">
                                Sign in here
                            </Link>
                        </p>
                    }

            </form>
        </section>
        </AnimationWrapper>

    )
}
export default UserAuthForm;