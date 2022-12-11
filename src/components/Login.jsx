import LoginImage from "../assets/unsplash_OOE4xAnBhKo.png";
import EmailIcon from "../assets/mail-bulk.png";
import PasswordIcon from "../assets/lock.png";
import { Fragment } from "react";
const Login = () => {
  const buttonStyle = "bg-[#184A2C] text-white font-semibold w-full py-3 px-8";
  const textColor = "text-[#184A2C]";
  const inpDiv =
    "flex justify-start items-center bg-[#EBFEF2] space-x-3 mb-6 p-3 rounded-lg shadow-lg shadow-slate-300";
  const inpFeild = "bg-[#EBFEF2] text-[#184A2C] focus:outline-0 w-full";
  return (
    <Fragment>
      <img src={LoginImage} alt="Image" />
      <div className="mb-12 text-left">
        <h1 className="text-[2.8rem] text-[#184A2C]">Login</h1>
        <p className={textColor}>Login your Plantito/Plantita account</p>
      </div>
      <div className={inpDiv}>
        <img src={EmailIcon} alt="" className="inline-block" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={inpFeild}
        />
      </div>
      <div className={inpDiv}>
        <img src={PasswordIcon} alt="" className="inline-block" />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          className={inpFeild}
        />
      </div>
      <button className={buttonStyle}>Login</button>
      <p className={`${textColor} text-sm mt-1`}>
        Don't have an account?
        <a href="#" className="font-semibold text-[#184A2C] underline">
          Signup
        </a>
      </p>
    </Fragment>
  );
};

export default Login;
