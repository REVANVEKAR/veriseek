import { useState } from "react";

const InputBox = ({name, type, id, value, placeholder, icon}) => {


    const[passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div  className="realtive w-[100%] mb-4">
            <input 
                name={name}
                type={ type == "password" ? passwordVisible ? "text" : 
                "password" : type}
                placeholder={placeholder}
                defaultValue={value}
                id={id}

                className="input-box"
            />

            <i className={"fi " + icon + " relative -top-10 left-4"} ></i>

            {
                type == "password"?
            <i className={"fi fi-rr-eye" +(!passwordVisible? "-crossed" : "")  + " relative -top-10  left-[85%] -translate-y-1/2 cursor-pointer"}
            onClick={() => setPasswordVisible(currentval => !currentval)}
            ></i>
                :""
            }

        </div>
    )
}
export default InputBox;