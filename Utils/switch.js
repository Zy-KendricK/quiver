import { useState } from "react";

function Switch() {
    const [toggle, setToggle] = useState(false);
    const toggleClass = " transform translate-x-5";
    const togglerClass = " bg-green-500";
    return (
        <>
            <div
                className={"md:w-13 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer" +
                    (toggle ? " bg-gray-400" : togglerClass)}
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                <div
                    className={
                        "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                        (toggle ? null : toggleClass)
                    }
                ></div>
            </div>
        </>
    );
}

export default Switch;