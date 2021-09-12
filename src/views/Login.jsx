import React from "react"
import "../Styles/Login.css"
import { useState } from "react"
import { withRouter } from "react-router"
// import TransitionPage from "../Components/RaiaComponents/TransitionPage"

function Login(props) {
  const [login, setLogin] = useState("")
  const [loginValidation, setLoginValidation] = useState(false)
  const [isTransitionPage, setTransitionPage] = useState(false)

  const handleForm = (key, value) => {
    setLogin({
      ...login,
      [key]: value,
    })
  }

  console.log(process.env.REACT_APP_DEV_URL, 'denv')
  const getUserToken = async (e) => {
    e.preventDefault()
    try {
      // console.log(login, 'register')
      let response = await fetch(
        // "https://striveschool-api.herokuapp.com/api/account/register",
        `${process.env.REACT_APP_DEV_URL}profile/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        }
      )
      if (response.ok) {
        // let userToken = await response.json()
        // console.log(userToken, "dsadas dsainside toekn")
        // window.localStorage.setItem("user_Token", userToken.access_token)
        let userResponse = await response.json()
        console.log(userResponse, '<<<<User response')
        getUserData(userResponse)
      } else {
        setLoginValidation(true)
      }
    } catch (err) {
      setLoginValidation(true)
      console.log(err)
      return err
    }
  }

  const getUserData = async (userResponse) => {
    // let userToken = "Bearer " + window.localStorage.getItem('user_Token')
    // console.log(userToken)
    try {
    //   let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
    //     method: 'Get',
    //     headers: {
    //       "Authorization": userToken,
    //     },

    //   })
    //   if (response.ok) {
        let userData = await userResponse
        if (userData.name === undefined) {
          setLoginValidation(true)
          return
        }
        setTransitionPage(true)
        let userDataKeyList = Object.keys(userData)
        userDataKeyList.forEach(key => window.localStorage.setItem(key, userData[key]))
        props.history.push('transitionPage')
       
       
      

    } catch (e) {
      console.log(e)
      return e

    }
  }

  return (
    <div
      id="logo-main-container"
      className="container-fluid d-flex flex-column align-content-center p-0"
    >
      <div className="container  d-flex flex-column justify-content-center align-items-center mt-4 mb-3 mod-logo-maxWidth">
        <div
          id="login-logo"
          className="d-flex justify-content-center align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 84 21"
            preserveAspectRatio="xMinYMin meet"
            version="1.1"
            focusable="false"
            className="lazy-loaded"
          >
            <g
              className="inbug"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0"
                className="bug-text-color"
                transform="translate(63.000000, 0.000000)"
              ></path>
              <path
                d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z"
                className="background"
                fill="#0a66c2"
              ></path>
            </g>
            <g className="linkedin-text">
              <path
                d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z"
                fill="#0a66c2"
              ></path>
              <path
                d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z"
                fill="#0a66c2"
              ></path>
              <polygon
                fill="#0a66c2"
                points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"
              ></polygon>
              <path
                d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z"
                fill="#0a66c2"
              ></path>
              <path
                d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z"
                fill="#0a66c2"
              ></path>
              <polygon
                fill="#0a66c2"
                points="3 3 0 3 0 18 9 18 9 15 3 15"
              ></polygon>
            </g>
          </svg>
        </div>
      </div>

      <div className="container-fluid p-0">
        <hr></hr>
      </div>

      <main className="container-fluid">
        <div className="container d-flex flex-column justify-content-center align-items-center mod-logo-maxWidth">
          <h4 className="mt-3"> To continue, log in to Linkedin.</h4>
          <div className="btn btn-primary logo-btn-FB w-100 d-flex justify-content-center p-2 m-1 ">
            <div id="FB-login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </div>
            <div className="btn-text">
              <span className="FB-text">Continue with Facebook</span>
            </div>
          </div>

          <div className="btn btn-bg-dark logo-btn-apple w-100 d-flex justify-content-center p-2 mt-3">
            <div id="apple-login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
              </svg>
            </div>
            <div className="btn-text">
              <span className="apple-text ">Continue with Apple</span>
            </div>
          </div>
        </div>

        <div className="container mt-4 mb-3 d-flex justify-content-center align-items-center mod-logo-maxWidth p-3">
          <div className="section-line"></div>
          <span className="mx-3 orModtranslate">or</span>
          <div className="section-line"></div>
        </div>
        {loginValidation && (
          <div className="container d-flex justify-content-center">
            <p className="text-danger">
              <strong>Sorry incorrect username/password :(</strong>
            </p>
          </div>
        )}

        <div className="container d-flex flex-column mod-logo-maxWidth">
          <form>
            <div className="form-group">
              <label for="exampleInputUsername">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
                a
                ria-describedby="usernameHelp"
                onChange={(e) => {
                  handleForm("username", e.target.value)
                }}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  handleForm("password", e.target.value)
                }}
              />
            </div>
            <div className="container d-flex justify-content-between align-items-center pl-4 pr-0">
              <div className="form-group form-check d-flex align-items-center m-0 p-0">
                <input
                  type="checkbox"
                  className="form-check-input my-auto"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <a
                id="login-btn"
                className="btn btn-success"
                onClick={(e) => getUserToken(e)}
              >
                Log in
              </a>
            </div>
          </form>

          <p className="mt-4 text-success text-center loginp">
            <span>
              <a href="#">Forgot your password?</a>
            </span>
          </p>
        </div>

        <div className="container d-flex flex-column justify-content-center align-items-center mod-logo-maxWidth">
          <h5 className="mb-4">Don't have an account?</h5>
          <button
            id="btn-sign-up-strivefy"
            className="btn btn-outline-dark btn-large w-100"
            onClick={() => props.history.push("signup")}
          >
            SIGN UP FOR LINKEDIN
          </button>
        </div>

        <div className="container mod-logo-maxWidth mt-4">
          <p className="text-center loginp">
            If you click "Log in with Facebook" and are not a Linkedin user, you
            will be registered and you agree to Linkedin's{" "}
            <span>
              <a href="#">Terms & Conditions</a>
            </span>{" "}
            and{" "}
            <span>
              <a href="#">Privacy Policy.</a>
            </span>
          </p>
        </div>
      </main>
    </div>
  )
}

export default withRouter(Login)
