import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
  setCredentials,
} from "../../auth/authSlice";
//import { useForm } from "react-hook-form";
import images from "../../images/custom";
import routes from "../../helpers/routes";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const currentToken = useSelector(selectCurrentToken);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const formSubmit = async (e) => {
    e.preventDefault();

    console.log({ user, pwd });
    dispatch(setCredentials({ user, accessToken: pwd }));

    // try {
    //   const userData = await login({ user, pwd }).unwrap();
    //   dispatch(setCredentials({ ...userData, user }));
    //   setUser("");
    //   setPwd("");
    //   navigate("/welcome");
    // } catch (err) {
    //   if (!err?.originalStatus) {
    //     // isLoading: true until timeout occurs
    //     setErrMsg("No Server Response");
    //   } else if (err.originalStatus === 400) {
    //     setErrMsg("Missing Username or Password");
    //   } else if (err.originalStatus === 401) {
    //     setErrMsg("Unauthorized");
    //   } else {
    //     setErrMsg("Login Failed");
    //   }
    //   errRef.current.focus();
    // }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  return (
    <main className="bg-slate-200">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                {/* <Link className="block" to="/">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <defs>
                      <linearGradient
                        x1="28.538%"
                        y1="20.229%"
                        x2="100%"
                        y2="108.156%"
                        id="logo-a"
                      >
                        <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                        <stop stopColor="#A5B4FC" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="88.638%"
                        y1="29.267%"
                        x2="22.42%"
                        y2="100%"
                        id="logo-b"
                      >
                        <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                        <stop stopColor="#38BDF8" offset="100%" />
                      </linearGradient>
                    </defs>
                    <rect fill="#6366F1" width="32" height="32" rx="16" />
                    <path
                      d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                      fill="#4F46E5"
                    />
                    <path
                      d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                      fill="url(#logo-a)"
                    />
                    <path
                      d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                      fill="url(#logo-b)"
                    />
                  </svg>
                </Link> */}
              </div>
            </div>

            <div className="mx-auto py-8 w-[60%]">
              <div className="mb-5">
                <img src={images.EMSLogoIcon} alt="logo" className="h-16" />
              </div>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1 className="text-3xl text-slate-800 font-bold">
                Welcome back!
              </h1>
              <h2 className="mb-10">Happy to see you again</h2>
              {/* Form */}
              {/* <form onSubmit={handleSubmit(formSubmit)}> */}
              <form onSubmit={formSubmit}>
                <div className="space-y-4">
                  <div className="mb-8 relative">
                    <label
                      className="block text-base font-medium mb-1"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <div>
                      <input
                        id="username"
                        className="form-input w-full h-12 bg-gray-300 pl-10 placeholder:text-gray-700 placeholder:text-base"
                        type="text"
                        ref={userRef}
                        value={user}
                        onChange={handleUserInput}
                        autoComplete="off"
                        placeholder="Username"
                        required
                        // {...register("username", {
                        //   required: true,
                        // })}
                      />

                      <section className="relative">
                        <div className="absolute inset-2 -top-10 right-auto flex items-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#06184a"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="7" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                        </div>
                      </section>
                    </div>
                    {/* {errors.username && <span>Este campo es requerido.</span>} */}
                  </div>
                  <div className="mb-8 relative">
                    <label
                      className="block text-base font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div>
                      <input
                        id="password"
                        className="form-input w-full h-12 bg-gray-300 pl-10 placeholder:text-base placeholder:text-gray-700"
                        type="password"
                        onChange={handlePwdInput}
                        value={pwd}
                        placeholder="Password"
                        required
                      />

                      <section className="relative">
                        <div className="absolute inset-2 -top-10 right-auto flex items-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-lock"
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#06184a"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="5" y="11" width="14" height="10" rx="2" />
                            <circle cx="12" cy="16" r="1" />
                            <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                          </svg>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between my-6">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox border-primary bg-gray-300"
                      />
                      <span className="text-sm font-medium ml-2">
                        Keep me signed in
                      </span>
                    </label>
                  </div>
                  <div>
                    <Link
                      className="text-sm hover:no-underline"
                      to={routes.resetPwd}
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  {/* <Link
                    className="btn bg-primary hover:bg-indigo-600 text-white ml-3"
                    to="/"
                  >
                    LOGIN
                  </Link> */}
                </div>
                <button className="btn bg-primary hover:bg-indigo-600 text-white w-full h-14">
                  LOGIN
                </button>
              </form>
              {/* Footer */}
              {/* <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Don’t you have an account?{" "}
                  <Link
                    className="font-medium text-primary hover:text-indigo-600"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </div> */}
              {/* Warning */}
              {/* <div className="mt-5">
                  <div className="bg-amber-100 text-amber-600 px-3 py-2 rounded">
                    <svg
                      className="inline w-3 h-3 shrink-0 fill-current mr-2"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      To support you during the pandemic super pro features are
                      free until March 31st.
                    </span>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div
        className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
        aria-hidden="true"
      >
        <img
          className="object-cover object-center w-full h-full"
          src={images.LoginBg}
          width="760"
          height="1024"
          alt="Authentication"
        />
        {/* <img
            className="absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block"
            src={AuthDecoration}
            width="218"
            height="224"
            alt="Authentication decoration"
          /> 
        </div>*/}
      </div>
    </main>
  );
};

export default Login;
