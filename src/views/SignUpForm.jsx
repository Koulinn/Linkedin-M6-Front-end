import React from 'react'
import { useFormik, Formik, Field, Form } from 'formik'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { withRouter } from 'react-router'

const validate = (values) => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }

    if (!values.surname) {
        errors.surname = 'Required'
    } else if (values.surname.length > 20) {
        errors.surname = 'Must be 20 characters or less'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Password must have at least 8 characters'
    }

    if (!values.area) {
        errors.area = 'Required'
    } else if (values.area.length < 3) {
        errors.area = 'Area must have at least 3 characters'
    }

    if (!values.title) {
        errors.title = 'Required'
    } else if (values.title.length < 5) {
        errors.title = 'Title must have at least 5 characters'
    }

    if (!values.username) {
        errors.username = 'Required'
    }

    if (!values.bio) {
        errors.bio = 'Required'
    } else if (values.bio.length < 30) {
        errors.bio = 'Your bio must have at least 30 characters'
    }

    return errors
}

const SignupForm = (props) => {
    const [showAlert, setShowAlert] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            username: '',
            title: '',
            password: '',
            bio: '',
            area: '',
        },
        validate,
        onSubmit: (values) => {
            createUser(values)
        },
    })

    const createUser = async (values) => {
        try {
            let response = await fetch(
                `${process.env.REACT_APP_DEV_URL}profile/register`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                }
            )
            if (response.ok) {
                let dataRequested = await response.json()

                getUserData(dataRequested)
            } else {
                alert('User not created')
            }
        } catch (e) {
            return e
        }
    }

    const getUserData = async (dataResponse) => {
        try {
            let userData = dataResponse
            window.localStorage.setItem(
                'image',
                'https://keyrecruitment.co.za/wp-content/uploads/2013/10/image.jpg'
            )
            let userDataKeyList = Object.keys(userData)
            userDataKeyList.forEach((key) =>
                window.localStorage.setItem(key, userData[key])
            )
            setShowAlert(true)
            setTimeout(() => {
                props.history.push('transitionPage')
            }, 2000)
        } catch (e) {
            console.log(e)
            return e
        }
    }

    return (
        <>
            <div className='container'>
                <div className='container  d-flex flex-column justify-content-center align-items-center pt-5 mb-3 mod-logo-maxWidth'>
                    <div
                        id='login-logo'
                        className='d-flex justify-content-center align-items-center'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 84 21'
                            preserveAspectRatio='xMinYMin meet'
                            version='1.1'
                            focusable='false'
                            className='lazy-loaded'
                        >
                            <g
                                className='inbug'
                                stroke='none'
                                strokeWidth='1'
                                fill='none'
                                fillRule='evenodd'
                            >
                                <path
                                    d='M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0'
                                    className='bug-text-color'
                                    transform='translate(63.000000, 0.000000)'
                                ></path>
                                <path
                                    d='M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z'
                                    className='background'
                                    fill='#0a66c2'
                                ></path>
                            </g>
                            <g className='linkedin-text'>
                                <path
                                    d='M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z'
                                    fill='#0a66c2'
                                ></path>
                                <path
                                    d='M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z'
                                    fill='#0a66c2'
                                ></path>
                                <polygon
                                    fill='#0a66c2'
                                    points='38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533'
                                ></polygon>
                                <path
                                    d='M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z'
                                    fill='#0a66c2'
                                ></path>
                                <path
                                    d='M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z'
                                    fill='#0a66c2'
                                ></path>
                                <polygon
                                    fill='#0a66c2'
                                    points='3 3 0 3 0 18 9 18 9 15 3 15'
                                ></polygon>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='signup-form'>
                    <p>Sign up</p>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        email: '',
                        username: '',
                        title: '',
                        password: '',
                        bio: '',
                        area: '',
                    }}
                >
                    <Form className='container' onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>
                                <img
                                    alt=''
                                    src='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItNDIgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zMzMuNjcxODc1IDEyMy4zMDg1OTRjMCAzMy44ODY3MTgtMTIuMTUyMzQ0IDYzLjIxODc1LTM2LjEyNSA4Ny4xOTUzMTItMjMuOTcyNjU2IDIzLjk3MjY1Ni01My4zMDg1OTQgMzYuMTI1LTg3LjE5NTMxMyAzNi4xMjVoLS4wNTg1OTNjLTMzLjg0Mzc1LS4wMTE3MTgtNjMuMTYwMTU3LTEyLjE2NDA2Mi04Ny4xMzI4MTMtMzYuMTI1LTIzLjk3NjU2Mi0yMy45NzY1NjItMzYuMTI1LTUzLjMwODU5NC0zNi4xMjUtODcuMTk1MzEyIDAtMzMuODc1IDEyLjE0ODQzOC02My4yMTA5MzggMzYuMTI1LTg3LjE4MzU5NCAyMy45NjA5MzgtMjMuOTY0ODQ0IDUzLjI3NzM0NC0zNi4xMTMyODEyIDg3LjEzMjgxMy0zNi4xMjVoLjA1ODU5M2MzMy44NzUgMCA2My4yMTA5MzggMTIuMTUyMzQ0IDg3LjE5NTMxMyAzNi4xMjUgMjMuOTcyNjU2IDIzLjk3MjY1NiAzNi4xMjUgNTMuMzA4NTk0IDM2LjEyNSA4Ny4xODM1OTR6bTAgMCIgZmlsbD0iI2ZmYmI4NSIvPjxwYXRoIGQ9Im00MjcuMTY3OTY5IDQyMy45NDUzMTJjMCAyNi43MzQzNzYtOC41MDM5MDcgNDguMzc4OTA3LTI1LjI1MzkwNyA2NC4zMjAzMTMtMTYuNTU0Njg3IDE1Ljc1MzkwNi0zOC40NDkyMTggMjMuNzM0Mzc1LTY1LjA3MDMxMiAyMy43MzQzNzVoLTI0Ni41MzEyNWMtMjYuNjIxMDk0IDAtNDguNTE1NjI1LTcuOTgwNDY5LTY1LjA1ODU5NC0yMy43MzQzNzUtMTYuNzYxNzE4LTE1Ljk1MzEyNS0yNS4yNTM5MDYtMzcuNTkzNzUtMjUuMjUzOTA2LTY0LjMyMDMxMyAwLTEwLjI4MTI1LjMzOTg0NC0yMC40NTMxMjQgMS4wMTk1MzEtMzAuMjM0Mzc0LjY5MTQwNy0xMCAyLjA4OTg0NC0yMC44ODI4MTMgNC4xNTIzNDQtMzIuMzYzMjgyIDIuMDc4MTI1LTExLjU3NDIxOCA0Ljc1LTIyLjUxNTYyNSA3Ljk0OTIxOS0zMi41MTU2MjUgMy4zMjAzMTItMTAuMzUxNTYyIDcuODEyNS0yMC41NjI1IDEzLjM3MTA5NC0zMC4zNDM3NSA1Ljc3MzQzNy0xMC4xNTIzNDMgMTIuNTU0Njg3LTE4Ljk5NjA5MyAyMC4xNTYyNS0yNi4yNzczNDMgNy45Njg3NS03LjYyMTA5NCAxNy43MTA5MzctMTMuNzQyMTg4IDI4Ljk3MjY1Ni0xOC4yMDMxMjYgMTEuMjIyNjU2LTQuNDM3NSAyMy42NjQwNjItNi42ODc1IDM2Ljk3NjU2Mi02LjY4NzUgNS4yMjI2NTYgMCAxMC4yODEyNSAyLjEzNjcxOSAyMC4wMzEyNSA4LjQ4ODI4MiA2LjEwMTU2MyAzLjk4MDQ2OCAxMy4xMzI4MTMgOC41MTE3MTggMjAuODk0NTMyIDEzLjQ3MjY1NiA2LjcwMzEyNCA0LjI3MzQzOCAxNS43ODEyNSA4LjI4MTI1IDI3LjAwMzkwNiAxMS45MDIzNDQgOS44NjMyODEgMy4xOTE0MDYgMTkuODc1IDQuOTcyNjU2IDI5Ljc2NTYyNSA1LjI4MTI1IDEuMDg5ODQzLjAzOTA2MiAyLjE3OTY4Ny4wNTg1OTQgMy4yNjk1MzEuMDU4NTk0IDEwLjk4NDM3NSAwIDIyLjA5Mzc1LTEuODAwNzgyIDMzLjA0Njg3NS01LjMzOTg0NCAxMS4yMjI2NTYtMy42MjEwOTQgMjAuMzEyNS03LjYyODkwNiAyNy4wMTE3MTktMTEuOTAyMzQ0IDcuODQzNzUtNS4wMTE3MTkgMTQuODc1LTkuNTM5MDYyIDIwLjg4NjcxOC0xMy40NjA5MzggOS43NTc4MTMtNi4zNjMyODEgMTQuODA4NTk0LTguNSAyMC4wNDI5NjktOC41IDEzLjMwMDc4MSAwIDI1Ljc0MjE4OCAyLjI1IDM2Ljk3MjY1NyA2LjY4NzUgMTEuMjYxNzE4IDQuNDYwOTM4IDIxLjAwMzkwNiAxMC41OTM3NSAyOC45NjQ4NDMgMTguMjAzMTI2IDcuNjEzMjgxIDcuMjgxMjUgMTQuMzk0NTMxIDE2LjEyNSAyMC4xNjQwNjMgMjYuMjc3MzQzIDUuNTYyNSA5Ljc4OTA2MyAxMC4wNjI1IDE5Ljk5MjE4OCAxMy4zNzEwOTQgMzAuMzMyMDMxIDMuMjAzMTI0IDEwLjAxMTcxOSA1Ljg4MjgxMiAyMC45NTMxMjYgNy45NjA5MzcgMzIuNTM1MTU3IDIuMDUwNzgxIDExLjQ5MjE4NyAzLjQ1MzEyNSAyMi4zNzUgNC4xNDA2MjUgMzIuMzQ3NjU2LjY5MTQwNiA5Ljc1IDEuMDMxMjUgMTkuOTIxODc1IDEuMDQyOTY5IDMwLjI0MjE4N3ptMCAwIiBmaWxsPSIjNmFhOWZmIi8+PHBhdGggZD0ibTIxMC4zNTE1NjIgMjQ2LjYyODkwNmgtLjA1ODU5M3YtMjQ2LjYyODkwNmguMDU4NTkzYzMzLjg3NSAwIDYzLjIxMDkzOCAxMi4xNTIzNDQgODcuMTk1MzEzIDM2LjEyNSAyMy45NzI2NTYgMjMuOTcyNjU2IDM2LjEyNSA1My4zMDg1OTQgMzYuMTI1IDg3LjE4MzU5NCAwIDMzLjg4NjcxOC0xMi4xNTIzNDQgNjMuMjE4NzUtMzYuMTI1IDg3LjE5NTMxMi0yMy45NzI2NTYgMjMuOTcyNjU2LTUzLjMwODU5NCAzNi4xMjUtODcuMTk1MzEzIDM2LjEyNXptMCAwIiBmaWxsPSIjZjVhODZjIi8+PHBhdGggZD0ibTQyNy4xNjc5NjkgNDIzLjk0NTMxMmMwIDI2LjczNDM3Ni04LjUwMzkwNyA0OC4zNzg5MDctMjUuMjUzOTA3IDY0LjMyMDMxMy0xNi41NTQ2ODcgMTUuNzUzOTA2LTM4LjQ0OTIxOCAyMy43MzQzNzUtNjUuMDcwMzEyIDIzLjczNDM3NWgtMTI2LjU1MDc4MXYtMjI1LjUzNTE1NmMxLjA4OTg0My4wMzkwNjIgMi4xNzk2ODcuMDU4NTk0IDMuMjY5NTMxLjA1ODU5NCAxMC45ODQzNzUgMCAyMi4wOTM3NS0xLjgwMDc4MiAzMy4wNDY4NzUtNS4zMzk4NDQgMTEuMjIyNjU2LTMuNjIxMDk0IDIwLjMxMjUtNy42Mjg5MDYgMjcuMDExNzE5LTExLjkwMjM0NCA3Ljg0Mzc1LTUuMDExNzE5IDE0Ljg3NS05LjUzOTA2MiAyMC44ODY3MTgtMTMuNDYwOTM4IDkuNzU3ODEzLTYuMzYzMjgxIDE0LjgwODU5NC04LjUgMjAuMDQyOTY5LTguNSAxMy4zMDA3ODEgMCAyNS43NDIxODggMi4yNSAzNi45NzI2NTcgNi42ODc1IDExLjI2MTcxOCA0LjQ2MDkzOCAyMS4wMDM5MDYgMTAuNTkzNzUgMjguOTY0ODQzIDE4LjIwMzEyNiA3LjYxMzI4MSA3LjI4MTI1IDE0LjM5NDUzMSAxNi4xMjUgMjAuMTY0MDYzIDI2LjI3NzM0MyA1LjU2MjUgOS43ODkwNjMgMTAuMDYyNSAxOS45OTIxODggMTMuMzcxMDk0IDMwLjMzMjAzMSAzLjIwMzEyNCAxMC4wMTE3MTkgNS44ODI4MTIgMjAuOTUzMTI2IDcuOTYwOTM3IDMyLjUzNTE1NyAyLjA1MDc4MSAxMS40OTIxODcgMy40NTMxMjUgMjIuMzc1IDQuMTQwNjI1IDMyLjM0NzY1Ni42OTE0MDYgOS43NSAxLjAzMTI1IDE5LjkyMTg3NSAxLjA0Mjk2OSAzMC4yNDIxODd6bTAgMCIgZmlsbD0iIzI2ODJmZiIvPjwvc3ZnPg=='
                                />
                                First Name :
                            </label>
                            <Field
                                id='name'
                                name='name'
                                type='text'
                                {...formik.getFieldProps('name')}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className='form-control'
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className='fw-bold text-danger'>
                                    {formik.errors.name}
                                </div>
                            ) : null}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='surname'>
                                {' '}
                                <img
                                    alt=''
                                    src='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItNDIgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zMzMuNjcxODc1IDEyMy4zMDg1OTRjMCAzMy44ODY3MTgtMTIuMTUyMzQ0IDYzLjIxODc1LTM2LjEyNSA4Ny4xOTUzMTItMjMuOTcyNjU2IDIzLjk3MjY1Ni01My4zMDg1OTQgMzYuMTI1LTg3LjE5NTMxMyAzNi4xMjVoLS4wNTg1OTNjLTMzLjg0Mzc1LS4wMTE3MTgtNjMuMTYwMTU3LTEyLjE2NDA2Mi04Ny4xMzI4MTMtMzYuMTI1LTIzLjk3NjU2Mi0yMy45NzY1NjItMzYuMTI1LTUzLjMwODU5NC0zNi4xMjUtODcuMTk1MzEyIDAtMzMuODc1IDEyLjE0ODQzOC02My4yMTA5MzggMzYuMTI1LTg3LjE4MzU5NCAyMy45NjA5MzgtMjMuOTY0ODQ0IDUzLjI3NzM0NC0zNi4xMTMyODEyIDg3LjEzMjgxMy0zNi4xMjVoLjA1ODU5M2MzMy44NzUgMCA2My4yMTA5MzggMTIuMTUyMzQ0IDg3LjE5NTMxMyAzNi4xMjUgMjMuOTcyNjU2IDIzLjk3MjY1NiAzNi4xMjUgNTMuMzA4NTk0IDM2LjEyNSA4Ny4xODM1OTR6bTAgMCIgZmlsbD0iI2ZmYmI4NSIvPjxwYXRoIGQ9Im00MjcuMTY3OTY5IDQyMy45NDUzMTJjMCAyNi43MzQzNzYtOC41MDM5MDcgNDguMzc4OTA3LTI1LjI1MzkwNyA2NC4zMjAzMTMtMTYuNTU0Njg3IDE1Ljc1MzkwNi0zOC40NDkyMTggMjMuNzM0Mzc1LTY1LjA3MDMxMiAyMy43MzQzNzVoLTI0Ni41MzEyNWMtMjYuNjIxMDk0IDAtNDguNTE1NjI1LTcuOTgwNDY5LTY1LjA1ODU5NC0yMy43MzQzNzUtMTYuNzYxNzE4LTE1Ljk1MzEyNS0yNS4yNTM5MDYtMzcuNTkzNzUtMjUuMjUzOTA2LTY0LjMyMDMxMyAwLTEwLjI4MTI1LjMzOTg0NC0yMC40NTMxMjQgMS4wMTk1MzEtMzAuMjM0Mzc0LjY5MTQwNy0xMCAyLjA4OTg0NC0yMC44ODI4MTMgNC4xNTIzNDQtMzIuMzYzMjgyIDIuMDc4MTI1LTExLjU3NDIxOCA0Ljc1LTIyLjUxNTYyNSA3Ljk0OTIxOS0zMi41MTU2MjUgMy4zMjAzMTItMTAuMzUxNTYyIDcuODEyNS0yMC41NjI1IDEzLjM3MTA5NC0zMC4zNDM3NSA1Ljc3MzQzNy0xMC4xNTIzNDMgMTIuNTU0Njg3LTE4Ljk5NjA5MyAyMC4xNTYyNS0yNi4yNzczNDMgNy45Njg3NS03LjYyMTA5NCAxNy43MTA5MzctMTMuNzQyMTg4IDI4Ljk3MjY1Ni0xOC4yMDMxMjYgMTEuMjIyNjU2LTQuNDM3NSAyMy42NjQwNjItNi42ODc1IDM2Ljk3NjU2Mi02LjY4NzUgNS4yMjI2NTYgMCAxMC4yODEyNSAyLjEzNjcxOSAyMC4wMzEyNSA4LjQ4ODI4MiA2LjEwMTU2MyAzLjk4MDQ2OCAxMy4xMzI4MTMgOC41MTE3MTggMjAuODk0NTMyIDEzLjQ3MjY1NiA2LjcwMzEyNCA0LjI3MzQzOCAxNS43ODEyNSA4LjI4MTI1IDI3LjAwMzkwNiAxMS45MDIzNDQgOS44NjMyODEgMy4xOTE0MDYgMTkuODc1IDQuOTcyNjU2IDI5Ljc2NTYyNSA1LjI4MTI1IDEuMDg5ODQzLjAzOTA2MiAyLjE3OTY4Ny4wNTg1OTQgMy4yNjk1MzEuMDU4NTk0IDEwLjk4NDM3NSAwIDIyLjA5Mzc1LTEuODAwNzgyIDMzLjA0Njg3NS01LjMzOTg0NCAxMS4yMjI2NTYtMy42MjEwOTQgMjAuMzEyNS03LjYyODkwNiAyNy4wMTE3MTktMTEuOTAyMzQ0IDcuODQzNzUtNS4wMTE3MTkgMTQuODc1LTkuNTM5MDYyIDIwLjg4NjcxOC0xMy40NjA5MzggOS43NTc4MTMtNi4zNjMyODEgMTQuODA4NTk0LTguNSAyMC4wNDI5NjktOC41IDEzLjMwMDc4MSAwIDI1Ljc0MjE4OCAyLjI1IDM2Ljk3MjY1NyA2LjY4NzUgMTEuMjYxNzE4IDQuNDYwOTM4IDIxLjAwMzkwNiAxMC41OTM3NSAyOC45NjQ4NDMgMTguMjAzMTI2IDcuNjEzMjgxIDcuMjgxMjUgMTQuMzk0NTMxIDE2LjEyNSAyMC4xNjQwNjMgMjYuMjc3MzQzIDUuNTYyNSA5Ljc4OTA2MyAxMC4wNjI1IDE5Ljk5MjE4OCAxMy4zNzEwOTQgMzAuMzMyMDMxIDMuMjAzMTI0IDEwLjAxMTcxOSA1Ljg4MjgxMiAyMC45NTMxMjYgNy45NjA5MzcgMzIuNTM1MTU3IDIuMDUwNzgxIDExLjQ5MjE4NyAzLjQ1MzEyNSAyMi4zNzUgNC4xNDA2MjUgMzIuMzQ3NjU2LjY5MTQwNiA5Ljc1IDEuMDMxMjUgMTkuOTIxODc1IDEuMDQyOTY5IDMwLjI0MjE4N3ptMCAwIiBmaWxsPSIjNmFhOWZmIi8+PHBhdGggZD0ibTIxMC4zNTE1NjIgMjQ2LjYyODkwNmgtLjA1ODU5M3YtMjQ2LjYyODkwNmguMDU4NTkzYzMzLjg3NSAwIDYzLjIxMDkzOCAxMi4xNTIzNDQgODcuMTk1MzEzIDM2LjEyNSAyMy45NzI2NTYgMjMuOTcyNjU2IDM2LjEyNSA1My4zMDg1OTQgMzYuMTI1IDg3LjE4MzU5NCAwIDMzLjg4NjcxOC0xMi4xNTIzNDQgNjMuMjE4NzUtMzYuMTI1IDg3LjE5NTMxMi0yMy45NzI2NTYgMjMuOTcyNjU2LTUzLjMwODU5NCAzNi4xMjUtODcuMTk1MzEzIDM2LjEyNXptMCAwIiBmaWxsPSIjZjVhODZjIi8+PHBhdGggZD0ibTQyNy4xNjc5NjkgNDIzLjk0NTMxMmMwIDI2LjczNDM3Ni04LjUwMzkwNyA0OC4zNzg5MDctMjUuMjUzOTA3IDY0LjMyMDMxMy0xNi41NTQ2ODcgMTUuNzUzOTA2LTM4LjQ0OTIxOCAyMy43MzQzNzUtNjUuMDcwMzEyIDIzLjczNDM3NWgtMTI2LjU1MDc4MXYtMjI1LjUzNTE1NmMxLjA4OTg0My4wMzkwNjIgMi4xNzk2ODcuMDU4NTk0IDMuMjY5NTMxLjA1ODU5NCAxMC45ODQzNzUgMCAyMi4wOTM3NS0xLjgwMDc4MiAzMy4wNDY4NzUtNS4zMzk4NDQgMTEuMjIyNjU2LTMuNjIxMDk0IDIwLjMxMjUtNy42Mjg5MDYgMjcuMDExNzE5LTExLjkwMjM0NCA3Ljg0Mzc1LTUuMDExNzE5IDE0Ljg3NS05LjUzOTA2MiAyMC44ODY3MTgtMTMuNDYwOTM4IDkuNzU3ODEzLTYuMzYzMjgxIDE0LjgwODU5NC04LjUgMjAuMDQyOTY5LTguNSAxMy4zMDA3ODEgMCAyNS43NDIxODggMi4yNSAzNi45NzI2NTcgNi42ODc1IDExLjI2MTcxOCA0LjQ2MDkzOCAyMS4wMDM5MDYgMTAuNTkzNzUgMjguOTY0ODQzIDE4LjIwMzEyNiA3LjYxMzI4MSA3LjI4MTI1IDE0LjM5NDUzMSAxNi4xMjUgMjAuMTY0MDYzIDI2LjI3NzM0MyA1LjU2MjUgOS43ODkwNjMgMTAuMDYyNSAxOS45OTIxODggMTMuMzcxMDk0IDMwLjMzMjAzMSAzLjIwMzEyNCAxMC4wMTE3MTkgNS44ODI4MTIgMjAuOTUzMTI2IDcuOTYwOTM3IDMyLjUzNTE1NyAyLjA1MDc4MSAxMS40OTIxODcgMy40NTMxMjUgMjIuMzc1IDQuMTQwNjI1IDMyLjM0NzY1Ni42OTE0MDYgOS43NSAxLjAzMTI1IDE5LjkyMTg3NSAxLjA0Mjk2OSAzMC4yNDIxODd6bTAgMCIgZmlsbD0iIzI2ODJmZiIvPjwvc3ZnPg=='
                                />
                                Last Name :
                            </label>
                            <Field
                                id='surname'
                                className='form-control'
                                name='surname'
                                type='text'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.surname}
                            />
                            {formik.touched.surname && formik.errors.surname ? (
                                <div className='fw-bold text-danger'>
                                    {formik.errors.surname}
                                </div>
                            ) : null}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email'>
                                {' '}
                                <img
                                    alt=''
                                    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8Y2lyY2xlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2IiBmaWxsPSIjNTZhMmYzIiBkYXRhLW9yaWdpbmFsPSIjNWY5OGQxIiBjbGFzcz0iIj48L2NpcmNsZT4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBkPSJNNDE1LjgxMywxNDcuNDY2SDk1LjU1OGwxMTYuMDE5LDEyMC44MDZsMzMuNDgsMzMuOWMtMTguMjE2LTQuMTY0LTE5LjM0My02Ljc1OS0yNy40MTUtMTMuMzQ5ICBjLTQuMjM0LTMuNDU3LTEyLjQxNC0xMi44NTItMjQuODM4LTI1LjU0QzE1NC4wMjMsMjIzLjY4Miw4OC4yMTcsMTU2LjQ4NCw4OC4yMTcsMTU2LjQ4NHYxOTguODIybDguMjY1LDguMjY1bC0wLjkyNSwwLjk2MyAgTDI0Mi42OCw1MTEuNjU3YzQuNDEyLDAuMjI2LDguODUyLDAuMzQzLDEzLjMyLDAuMzQzYzE0MS4zODUsMCwyNTYtMTE0LjYxNSwyNTYtMjU2YzAtNC4yNDYtMC4xMS04LjQ2Ni0wLjMxMy0xMi42NjEgIEw0MTUuODEzLDE0Ny40NjZ6IiBmaWxsPSIjMzQ2Njk5IiBkYXRhLW9yaWdpbmFsPSIjM2E2ZGExIiBjbGFzcz0iIj48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cG9seWdvbiBzdHlsZT0iIiBwb2ludHM9Ijg4LjIxNywxNTYuNDg0IDg4LjIxNywzNTUuMzA2IDE4NS4xNzUsMjU1LjQ5MyAgIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBjbGFzcz0iIj48L3BvbHlnb24+Cgk8cG9seWdvbiBzdHlsZT0iIiBwb2ludHM9IjQyMy43ODMsMTU2LjQ4NCA0MjMuNzgzLDM1NS4zMDYgMzI3LjMwNywyNTUuODk1ICAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmZmZmYiIGNsYXNzPSIiPjwvcG9seWdvbj4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik05NS41NTgsMTQ3LjQ2NmgzMjAuMjU1TDI4OS45NDgsMjc4LjUyNGMtOC45NTgsOS4zMjctMjEuMzMxLDE0LjU5OS0zNC4yNjIsMTQuNTk5ICAgcy0yNS4zMDQtNS4yNzItMzQuMjYyLTE0LjU5OUw5NS41NTgsMTQ3LjQ2NnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmZmZmYiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik0yOTcuMjA5LDI4NS40OTZjLTEwLjc5OSwxMS4yNDQtMjUuOTMzLDE3LjY5NC00MS41MjMsMTcuNjk0Yy0xNS41ODksMC0zMC43MjQtNi40NDgtNDEuNTIyLTE3LjY5MyAgIGwtMjEuMzQ5LTIyLjIzTDk1LjU1OCwzNjQuNTM0aDMyMC4yNTVsLTk3LjI1Ni0xMDEuMjY3TDI5Ny4yMDksMjg1LjQ5NnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmZmZmYiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+'
                                />
                                Email Address :
                            </label>
                            <Field
                                id='email'
                                className='form-control'
                                name='email'
                                type='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='fw-bold text-danger'>
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='password'>
                                {' '}
                                <img
                                    alt=''
                                    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PGc+PGc+PHBhdGggZD0ibTM0Ni42MzggOTMuODg1YzEuNjUyLTYuMzg4LjY4My0xMy4yMDktMi44MzMtMTguNzkyLTIzLjcyLTM3LjY2Ny02Mi4zMTItNjUuMDYxLTEwNy40NzItNzMuODk5LTgwLjM3NCA5Ljc0LTE0Mi44NTYgNzguMzcxLTE0Mi44NTYgMTYxLjMzdjE5NC4zMDVoNDguNzc5di0xOTIuOTc5YzAtNjIuODg2IDUxLjQ1MS0xMTUuMzkxIDExNC4zMzYtMTE1LjA2OSAzNi43MTYuMTg3IDY5LjM2NyAxNy44NjUgOTAuMDQ2IDQ1LjEwNHoiIGZpbGw9IiNlYWYyZmYiIGRhdGEtb3JpZ2luYWw9IiNlYWYyZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzY5Ljc0NSAzNDcuOTU5djguODY5aDUuOTMxeiIgZmlsbD0iI2U4ZThlOCIgZGF0YS1vcmlnaW5hbD0iI2U4ZThlOCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPSJtMjU2IDBjLTkuNjYxIDAtMTkuMTI2Ljg1Mi0yOC4zMjkgMi40NzYgNTIuODA3IDkuMzIxIDk2Ljg5MiA0NC4yMjcgMTE4Ljk2NyA5MS40MDkgMTQuNDkzIDE5LjA5MSAyMy4xMDcgNDIuODc2IDIzLjEwNyA2OC42Mzh2MTk0LjMwNWg0OC43Nzl2LTE5NC4zMDVjMC04OS42MTUtNzIuOTA4LTE2Mi41MjMtMTYyLjUyNC0xNjIuNTIzeiIgZmlsbD0iI2M5ZTBmZCIgZGF0YS1vcmlnaW5hbD0iI2M5ZTBmZCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48cGF0aCBkPSJtNDA2Ljc4NCA0NzguNzkydi0xOTcuNjU2YzAtMTguMzQxLTE0Ljg2OC0zMy4yMDgtMzMuMjA4LTMzLjIwOGgtMjgxLjQ3OWMtMTguMzQgMC0zMy4yMDggMTQuODY4LTMzLjIwOCAzMy4yMDh2MTk3LjY1NmMwIDE4LjM0IDE0Ljg2OCAzMy4yMDggMzMuMjA4IDMzLjIwOGgyODEuNDc5YzE4LjM0IDAgMzMuMjA4LTE0Ljg2OCAzMy4yMDgtMzMuMjA4eiIgZmlsbD0iIzY1YmVmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZDA2NCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im00MTkuOTAzIDI0Ny45MjhoLTU2LjY4OGMxOC4zNCAwIDMzLjIwOCAxNC44NjggMzMuMjA4IDMzLjIwOHYxOTcuNjU2YzAgMTguMzQtMTQuODY4IDMzLjIwOC0zMy4yMDggMzMuMjA4aDU2LjY4OGMxOC4zNCAwIDMzLjIwOC0xNC44NjggMzMuMjA4LTMzLjIwOHYtMTk3LjY1NmMwLTE4LjM0MS0xNC44NjgtMzMuMjA4LTMzLjIwOC0zMy4yMDh6IiBmaWxsPSIjNTA4MWY1IiBkYXRhLW9yaWdpbmFsPSIjZmZjMjUwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIzNzkuOTY0IiBmaWxsPSIjZmZmZmZmIiByPSI5Ni4zNDkiIGRhdGEtb3JpZ2luYWw9IiNmZmZmZmYiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0yNTYgMjgzLjYxNWMtOS44NTkgMC0xOS4zNzEgMS40ODQtMjguMzI5IDQuMjM2IDM5LjM4NiAxMi4wOTkgNjguMDIgNDguNzYxIDY4LjAyIDkyLjExM3MtMjguNjM0IDgwLjAxNC02OC4wMiA5Mi4xMTNjOC45NTcgMi43NTIgMTguNDY5IDQuMjM2IDI4LjMyOSA0LjIzNiA1My4yMTIgMCA5Ni4zNDktNDMuMTM3IDk2LjM0OS05Ni4zNDlzLTQzLjEzNy05Ni4zNDktOTYuMzQ5LTk2LjM0OXoiIGZpbGw9IiNlYWYyZmYiIGRhdGEtb3JpZ2luYWw9IiNlYWYyZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjg0LjU3OSAzNTguNTg3YzAtMTYuMzk3LTEzLjgwOS0yOS41NjktMzAuNDMyLTI4LjUyLTE0LjMxNC45MDMtMjUuOTA3IDEyLjYxMS0yNi42ODIgMjYuOTMyLS41MyA5Ljc5NiAzLjg4MSAxOC41ODMgMTAuOTYgMjQuMTE0bC03LjY5IDQwLjMxN2MtLjg0IDQuNDA2IDIuNTM3IDguNDg4IDcuMDIyIDguNDg4aDM2LjQ4OGM0LjQ4NSAwIDcuODYzLTQuMDgzIDcuMDIyLTguNDg4bC03LjY5LTQwLjMxN2M2LjY5My01LjIzIDExLjAwMi0xMy4zNzIgMTEuMDAyLTIyLjUyNnoiIGZpbGw9IiM2MGEwZjciIGRhdGEtb3JpZ2luYWw9IiM2MGEwZjciIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4='
                                />
                                Password :
                            </label>
                            <Field
                                id='password'
                                className='form-control'
                                name='password'
                                type='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password &&
                            formik.errors.password ? (
                                <div className='fw-bold text-danger'>
                                    {formik.errors.password}
                                </div>
                            ) : null}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='area'>
                                {' '}
                                <img
                                    alt=''
                                    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ2Ny45OCAyNjQuOTctLjE5LjAyLTE0LjQyIDEuNDVjLS41NC4wNi0xLjA3LjA5LTEuNjEuMTJsLTMuOTguMThhMTkuNDQ5IDE5LjQ0OSAwIDAgMCAtMTYuOTEgMTEuNjFsLTEuMDEgMi4zMmEzMC4xMzMgMzAuMTMzIDAgMCAxIC0yNy41OSAxOC4wNGgtMTYuOTRhMTYuMjEyIDE2LjIxMiAwIDAgMSAtMTYuMTMtMTQuNjJsLS42OC02Ljc4YTE5LjMxNiAxOS4zMTYgMCAwIDAgLTguNzQtMTQuMyAxOC4wODIgMTguMDgyIDAgMCAxIC04LjI2LTE1LjE4di02LjhhMjEuNjUxIDIxLjY1MSAwIDAgMSA3LjMxLTE2LjIybDI4Ljk0LTI1LjU5YTIwLjExNyAyMC4xMTcgMCAwIDAgNS45My0yMC45MyAyMC43MjEgMjAuNzIxIDAgMCAwIC0xNy4yOS0xNC41N2wtMi45Mi0uMzZhMjIuNiAyMi42IDAgMCAxIC0xNC4yNy03LjU2IDE2LjQ3NCAxNi40NzQgMCAwIDEgLTEuOS0xOC45OWwxOS4wMy0zMi42Mi4wMi0uMDJjLTM2LjA3LTIzLjAxLTgwLjE4LTM4LjMtMTIyLjUyLTM4LjMtNS41NyAwLTExLjc1LjM1LTE3LjgyLjg4di4wMmwyNy4xOSAzOS4yMmEzMC4wODIgMzAuMDgyIDAgMCAxIC0uOSAzNS40OGwtNy4xMSA5LjI1YTIyLjI3OCAyMi4yNzggMCAwIDEgLTIwLjQ3IDguNWwtOC4wNy0xLjAzYTIzLjI4NyAyMy4yODcgMCAwIDAgLTIzLjAzIDExLjMxIDIyLjQ5MyAyMi40OTMgMCAwIDEgLTIyLjI0IDEwLjkzbC0xOC42NC0yLjM3YTI0LjQgMjQuNCAwIDAgMCAtMjMuMjggMTAuNTMgMjAuOTE4IDIwLjkxOCAwIDAgMCAtLjM1IDIyLjlsMTIuMzIgMTkuNDZhMTguOTg1IDE4Ljk4NSAwIDAgMCAyNS4wMyA2LjU5bDEyLjY4LTYuOGM5LjA2LTQuODYgMjMuNS00LjExIDMyLjMyIDEuMThoLjAxbDU4LjYyIDM4LjQxIDYuNzcgOS4yOGMuNzMgMS4wMiAxLjUxIDIuMDIgMi4zMyAyLjk4bDE1LjQgMTguMTRhMTMuODQyIDEzLjg0MiAwIDAgMSAtMi4xMSAxOS45MmwtMjMuMzUgMTcuOTRhMzEuODE4IDMxLjgxOCAwIDAgMCAtMTAuOTkgMTUuODJsLTcuNzcgMjUuMjZhMjEuODcgMjEuODcgMCAwIDEgLTQuMDcgNy41MWwtNy41NyA5LjExYTM4LjUgMzguNSAwIDAgMCAtOC42NyAyMC42MyAxNy45IDE3LjkgMCAwIDEgLTEwLjkgMTQuNyAxMS45MjYgMTEuOTI2IDAgMCAxIC0xNi40MS05LjA2bC03LjEzLTQyLjgyYTI3LjAxOCAyNy4wMTggMCAwIDAgLTUuMTgtMTEuOTlsLTI2LjEyLTM0LjI4YTM2LjQgMzYuNCAwIDAgMSAtNi4xMi0xMi4zNGwtOC42Mi0zMS4xM2EyNi42NzMgMjYuNjczIDAgMCAwIC0xOC42OS0xOC42M2wtMS44Ny0uNTFhMzAuMDcyIDMwLjA3MiAwIDAgMSAtMTIuNjgtNy4xMWwtMTYuMDgtMTUuMTVhNDIuMzQgNDIuMzQgMCAwIDEgLTcuNTktOS41OCAyOS44MTcgMjkuODE3IDAgMCAwIC0zMS41NC0xNC4yOWwtMjYuNDMgOC42LS4wNC0uMDFhMjE0LjI3NiAyMTQuMjc2IDAgMCAwIC01LjY4IDQ3LjYxYzAgMTE4Ljc4IDk2LjE5IDIxNS4wNyAyMTQuODUgMjE1LjA3czIxNC44Ni05Ni4yOSAyMTQuODYtMjE1LjA3YzAtNC45MS0uMjYtMTAuMy0uNzMtMTUuOTZ6IiBmaWxsPSIjNTFiOWQxIiBkYXRhLW9yaWdpbmFsPSIjN2NlNWU5IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDUzLjU0IDE5NC4wNi0uMDEtLjAxLTM1LjU2LTU2LjIyLS4wMS0uMDFhMjI4Ljc0OSAyMjguNzQ5IDAgMCAwIC00MS41OS0zMy42NWwtLjAyLjAyLTE5LjAzIDMyLjYyYTE2LjQ3NCAxNi40NzQgMCAwIDAgMS45IDE4Ljk5IDIyLjYgMjIuNiAwIDAgMCAxNC4yNyA3LjU2bDIuOTIuMzZhMjAuNzIxIDIwLjcyMSAwIDAgMSAxNy4yOSAxNC41NyAyMC4xMTcgMjAuMTE3IDAgMCAxIC01LjkzIDIwLjkzbC0yOC45NCAyNS41OWEyMS42NTEgMjEuNjUxIDAgMCAwIC03LjMxIDE2LjIydjYuOGExOC4wODIgMTguMDgyIDAgMCAwIDguMjYgMTUuMTggMTkuMzE2IDE5LjMxNiAwIDAgMSA4Ljc0IDE0LjNsLjY4IDYuNzhhMTYuMjEyIDE2LjIxMiAwIDAgMCAxNi4xMyAxNC42MmgxNi45NGEzMC4xMzMgMzAuMTMzIDAgMCAwIDI3LjU5LTE4LjA0bDEuMDEtMi4zMmExOS40NDkgMTkuNDQ5IDAgMCAxIDE2LjkxLTExLjYxbDMuOTgtLjE4Yy41NC0uMDMgMS4wNy0uMDYgMS42MS0uMTJsMTQuNDItMS40NS4xOS0uMDJjLTEuOTktMjMuODMtNy44Mi01Mi41My0xNC40NC03MC45MXoiIGZpbGw9IiNiMWU4NjIiIGRhdGEtb3JpZ2luYWw9IiNiMWU4NjIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMDQuNjEgMzAwLjczLTE1LjQtMTguMTRjLS44Mi0uOTYtMS42LTEuOTYtMi4zMy0yLjk4bC02Ljc3LTkuMjgtNTguNjItMzguNDFoLS4wMWMtOC44Mi01LjI5LTIzLjI2LTYuMDQtMzIuMzItMS4xOGwtMTIuNjggNi44YTE4Ljk4NSAxOC45ODUgMCAwIDEgLTI1LjAzLTYuNTlsLTEyLjMyLTE5LjQ2YTIwLjkxOCAyMC45MTggMCAwIDEgLjM1LTIyLjkgMjQuNCAyNC40IDAgMCAxIDIzLjI4LTEwLjUzbDE4LjY0IDIuMzdhMjIuNDkzIDIyLjQ5MyAwIDAgMCAyMi4yNC0xMC45MyAyMy4yODcgMjMuMjg3IDAgMCAxIDIzLjAzLTExLjMxbDguMDcgMS4wM2EyMi4yNzggMjIuMjc4IDAgMCAwIDIwLjQ3LTguNWw3LjExLTkuMjVhMzAuMDgyIDMwLjA4MiAwIDAgMCAuOS0zNS40OGwtMjcuMTktMzkuMjJ2LS4wMmMtNS4wNi40NS0xMC4wNCAxLjAzLTE0LjUxIDEuNjZsLS4xMi0uMDQtNjAuOTYgMTguM2MtMTMuMTIgNi40OS0zMC4xOCAxNy45My00MS42IDI2Ljg1bC01MS43MiA1OS45My0uMDcuMDVhMjQwLjIyNyAyNDAuMjI3IDAgMCAwIC0yMi4zNyA1OS44MmwuMDQuMDEgMjYuNDMtOC42YTI5LjgxNyAyOS44MTcgMCAwIDEgMzEuNTQgMTQuMjkgNDIuMzQgNDIuMzQgMCAwIDAgNy41OSA5LjU4bDE2LjA4IDE1LjE1YTMwLjA3MiAzMC4wNzIgMCAwIDAgMTIuNjggNy4xMWwxLjg3LjUxYTI2LjY3MyAyNi42NzMgMCAwIDEgMTguNjkgMTguNjNsOC42MiAzMS4xM2EzNi40IDM2LjQgMCAwIDAgNi4xMiAxMi4zNGwyNi4xMiAzNC4yOGEyNy4wMTggMjcuMDE4IDAgMCAxIDUuMTggMTEuOTlsNy4xMyA0Mi44MmExMS45MjYgMTEuOTI2IDAgMCAwIDE2LjQxIDkuMDYgMTcuOSAxNy45IDAgMCAwIDEwLjktMTQuNyAzOC41IDM4LjUgMCAwIDEgOC42Ny0yMC42M2w3LjU3LTkuMTFhMjEuODcgMjEuODcgMCAwIDAgNC4wNy03LjUxbDcuNzctMjUuMjZhMzEuODE4IDMxLjgxOCAwIDAgMSAxMC45OS0xNS44MmwyMy4zNS0xNy45NGExMy44NDIgMTMuODQyIDAgMCAwIDIuMTEtMTkuOTJ6IiBmaWxsPSIjYjFlODYyIiBkYXRhLW9yaWdpbmFsPSIjYjFlODYyIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNjkgMjgwLjkzYTIxNC4yNzYgMjE0LjI3NiAwIDAgMSA1LjY4LTQ3LjYxcTEuMDU5LTQuNiAyLjMtOS4xNDhoLS4wN2EyOS43MzggMjkuNzM4IDAgMCAwIC01Ljc2LjU2bC0yNi40MyA4LjYtLjA0LS4wMWEyMTQuMjc2IDIxNC4yNzYgMCAwIDAgLTUuNjggNDcuNjA4YzAgMTE4Ljc4IDk2LjE5IDIxNS4wNyAyMTQuODUgMjE1LjA3IDUuMDQ0IDAgMTAuMDQzLS4xODggMTUtLjUzLTExMS42Ni03LjcxLTE5OS44NS0xMDAuODA5LTE5OS44NS0yMTQuNTR6IiBmaWxsPSIjMzJhOWE2IiBkYXRhLW9yaWdpbmFsPSIjNjRjY2M5IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNzEuMTUgMjI0LjczYTI5LjczOCAyOS43MzggMCAwIDEgNS43Ni0uNTZoLjA3YTIzNy44MzcgMjM3LjgzNyAwIDAgMSAyMC4wNy01MC42N2wuMDctLjA1IDUxLjcyLTU5LjkzYzExLjQyLTguOTIgMjguNDgtMjAuMzYgNDEuNi0yNi44NWw0OS4xNi0xNC43NTYtMy41Ny01LjE0NHYtLjAyYy01LjA2LjQ1LTEwLjA0IDEuMDMtMTQuNTEgMS42NmwtLjEyLS4wNC02MC45NiAxOC4zYy0xMy4xMiA2LjQ5LTMwLjE4IDE3LjkzLTQxLjYgMjYuODVsLTUxLjcyIDU5LjkzLS4wNy4wNWEyNDAuMjI3IDI0MC4yMjcgMCAwIDAgLTIyLjM3IDU5LjgybC4wNC4wMXoiIGZpbGw9IiM5YWMxNDYiIGRhdGEtb3JpZ2luYWw9IiM5YWMxNDYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNjAuNDQgODYuNjctNS40NC03LjI4YTQwLjQyOCA0MC40MjggMCAwIDEgLTguMTItMjYuNDRjMS4yNy0xOS41OSAxNi44Ny0zNi45NSAzOC4zNi0zNi45NXMzNy4wOSAxNy4zNiAzOC4zNiAzNi45NWEzNy45NTIgMzcuOTUyIDAgMCAxIC0yLjIgMTUuNDIgNDEuNjQgNDEuNjQgMCAwIDEgLTUuOTIgMTEuMDJsLTMwLjI0IDQwLjQ1eiIgZmlsbD0iI2ZmODU2NCIgZGF0YS1vcmlnaW5hbD0iI2ZmODU2NCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTEyNi4yNiAxMzQuMzdhMzkuODIxIDM5LjgyMSAwIDAgMSAtOC4xMSAyNi40M2wtMzAuMjUgNDAuNDYtMjAuNzgtMjcuODEtOS40Ni0xMi42NWE0MC41IDQwLjUgMCAwIDEgLTguMTItMjYuNDNjMS4yOC0xOS41OSAxNi44Ny0zNi45NSAzOC4zNi0zNi45NWEzNy41ODQgMzcuNTg0IDAgMCAxIDMwLjk0IDE2LjEgNDAuNzExIDQwLjcxMSAwIDAgMSA3LjQyIDIwLjg1eiIgZmlsbD0iI2ZmODU2NCIgZGF0YS1vcmlnaW5hbD0iI2ZmODU2NCIgc3R5bGU9IiI+PC9wYXRoPjxlbGxpcHNlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY3g9IjE4My45OCIgY3k9IjU0LjMiIGZpbGw9IiNkNGUxZjQiIHJ4PSIyMC4wNSIgcnk9IjIwLjA2IiBkYXRhLW9yaWdpbmFsPSIjZDRlMWY0IiBzdHlsZT0iIj48L2VsbGlwc2U+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtODYuNjQgMTE1LjY1YTIwLjA2NSAyMC4wNjUgMCAxIDEgLTIwLjA1IDIwLjA3IDIwLjA1OSAyMC4wNTkgMCAwIDEgMjAuMDUtMjAuMDd6IiBmaWxsPSIjZDRlMWY0IiBkYXRhLW9yaWdpbmFsPSIjZDRlMWY0IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjk3Ljc2IDIzMC4wMzdhMzkuODIxIDM5LjgyMSAwIDAgMSAtOC4xMSAyNi40M2wtMzAuMjUgNDAuNDYtMjAuNzgtMjcuODEtOS40Ni0xMi42NWE0MC41IDQwLjUgMCAwIDEgLTguMTItMjYuNDNjMS4yOC0xOS41OSAxNi44Ny0zNi45NSAzOC4zNi0zNi45NWEzNy41ODQgMzcuNTg0IDAgMCAxIDMwLjk0IDE2LjEgNDAuNzExIDQwLjcxMSAwIDAgMSA3LjQyIDIwLjg1eiIgZmlsbD0iI2ZmODU2NCIgZGF0YS1vcmlnaW5hbD0iI2ZmODU2NCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1OC42NSAyMTEuNzVhMjAuMDY1IDIwLjA2NSAwIDEgMSAtMjAuMDUgMjAuMDYgMjAuMDU2IDIwLjA1NiAwIDAgMSAyMC4wNS0yMC4wNnoiIGZpbGw9IiNkNGUxZjQiIGRhdGEtb3JpZ2luYWw9IiNkNGUxZjQiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00NzIuOTMgMTU1LjU5YTMyLjA5IDMyLjA5IDAgMCAxIC02LjUyIDIxLjI1bC0xMi44OCAxNy4yMS0xMS40NCAxNS4zLTI0LjMxLTMyLjUxYTMxLjgxOSAzMS44MTkgMCAwIDEgLjE5LTM5LjAxIDMwLjE0NCAzMC4xNDQgMCAwIDEgMjQuMTItMTEuOTRjMTcuMjggMCAyOS44MiAxMy45NiAzMC44NCAyOS43em0tMTUuNzMgMS4wOWExNi4xMiAxNi4xMiAwIDEgMCAtMTYuMTIgMTYuMTIgMTYuMTI2IDE2LjEyNiAwIDAgMCAxNi4xMi0xNi4xMnoiIGZpbGw9IiNmZjg1NjQiIGRhdGEtb3JpZ2luYWw9IiNmZjg1NjQiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00NDEuMDggMTQwLjU1YTE2LjEyNSAxNi4xMjUgMCAxIDEgLTE2LjEyIDE2LjEzIDE2LjEyNiAxNi4xMjYgMCAwIDEgMTYuMTItMTYuMTN6IiBmaWxsPSIjZDRlMWY0IiBkYXRhLW9yaWdpbmFsPSIjZDRlMWY0IiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=='
                                />
                                City, Country :{' '}
                            </label>
                            <Field
                                id='area'
                                className='form-control'
                                name='area'
                                type='area'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.area}
                            />
                            {formik.touched.area && formik.errors.area ? (
                                <div className='fw-bold text-danger'>
                                    {formik.errors.area}
                                </div>
                            ) : null}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='title'>
                                <img
                                    alt=''
                                    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTMzNi44MzUgNTQuODA2Yy0uODMxLS42MzQtOC41MjctNi4zNTktMjIuMjM2LTExLjg2OC0xNy42NjEtNy4wOTgtMzcuOTI2LTEwLjg1LTU4LjYwMy0xMC44NXMtNDAuOTQxIDMuNzUyLTU4LjYwNCAxMC44NWMtMTMuNzA4IDUuNTA5LTIxLjQwNCAxMS4yMzQtMjIuMjM2IDExLjg2OS00LjE3NCAzLjE4My02LjYyNCA4LjEzMi02LjYyNCAxMy4zODF2MjYuNDAxbDE2LjgyNyA5IDE2LjgyOC05di0xNi44NzJjOS4yMzUtNC43MTMgMjcuNzAzLTExLjk3NSA1My44MDgtMTEuOTc1IDI2LjEwNiAwIDQ0LjU3MyA3LjI2MiA1My44MDggMTEuOTc1djE2Ljg3MWwxNi44MjcgOSAxNi44MjgtOXYtMjYuNGMuMDAyLTUuMjUtMi40NDgtMTAuMTk5LTYuNjIzLTEzLjM4MnoiIGZpbGw9IiNlODgzNGQiIGRhdGEtb3JpZ2luYWw9IiNlODgzNGQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48ZyBmaWxsPSIjZDY2ZTQxIj48cGF0aCBkPSJtMTY4LjUzMyA5NC41ODl2MTguNThsMTYuODI4IDkgMTYuODI4LTl2LTE4LjU4eiIgZmlsbD0iI2Q2NmU0MSIgZGF0YS1vcmlnaW5hbD0iI2Q2NmU0MSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNDMuNDYgOTQuNTg5aC0zMy42NTV2MTguNThsMTYuODI4IDkgMTYuODI3LTl6IiBmaWxsPSIjZDY2ZTQxIiBkYXRhLW9yaWdpbmFsPSIjZDY2ZTQxIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjxwYXRoIGQ9Im0xMy4yNDcgMjk4LjI4NnYxNDkuNDkyYzAgMTcuNzQ3IDE0LjM4NyAzMi4xMzQgMzIuMTM0IDMyLjEzNGg0MjEuMjM4YzE3Ljc0NyAwIDMyLjEzNC0xNC4zODcgMzIuMTM0LTMyLjEzNHYtMTQ5LjQ5MnoiIGZpbGw9IiM0NjliZGQiIGRhdGEtb3JpZ2luYWw9IiMzNjVlN2QiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTMuMjQ3IDI3OS43MDZ2MTguNTgxYzI2LjY5NiAyMS4xOTYgOTcuMjUyIDYyLjM0MyAyNDIuNzUzIDYyLjM0M3MyMTYuMDU3LTQxLjE0NyAyNDIuNzUzLTYyLjM0NHYtMTguNTgxaC00ODUuNTA2eiIgZmlsbD0iIzE2NDQ2NiIgZGF0YS1vcmlnaW5hbD0iIzJiNGQ2NiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xMS44NTIgMjY5LjAwNWMyNS41ODUgMjAuODMgOTYuMDQzIDYzLjQ2NCAyNDQuMTQ4IDYzLjQ2NHMyMTguNTYyLTQyLjYzNCAyNDQuMTQ4LTYzLjQ2NGM3LjUtNi4xMDYgMTEuODUyLTI0LjI1NiAxMS44NTItMzMuOTI3di04OS43NzVjMC0xNy43NDctMTQuMzg3LTMyLjEzNC0zMi4xMzQtMzIuMTM0aC00NDcuNzMyYy0xNy43NDcgMC0zMi4xMzQgMTQuMzg3LTMyLjEzNCAzMi4xMzR2ODkuNzc1YzAgOS42NzEgNC4zNTIgMjcuODIxIDExLjg1MiAzMy45Mjd6IiBmaWxsPSIjMmE3ZGI5IiBkYXRhLW9yaWdpbmFsPSIjNDA3MDkzIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTUwMC4xNDggMjYwLjAwNWMtMjUuNTg1IDIwLjgzLTk2LjA0MyA2My40NjQtMjQ0LjE0OCA2My40NjRzLTIxOC41NjItNDIuNjM1LTI0NC4xNDgtNjMuNDY0Yy03LjUtNi4xMDYtMTEuODUyLTE1LjI1Ni0xMS44NTItMjQuOTI3djE4LjU4MWMwIDkuNjcxIDQuMzUyIDE4LjgyMSAxMS44NTIgMjQuOTI3IDI1LjU4NSAyMC44MyA5Ni4wNDMgNjMuNDY0IDI0NC4xNDggNjMuNDY0czIxOC41NjItNDIuNjM0IDI0NC4xNDgtNjMuNDY0YzcuNS02LjEwNiAxMS44NTItMTUuMjU2IDExLjg1Mi0yNC45Mjd2LTE4LjU4MWMwIDkuNjcxLTQuMzUyIDE4LjgyMS0xMS44NTIgMjQuOTI3eiIgZmlsbD0iIzQ2OWJkZCIgZGF0YS1vcmlnaW5hbD0iIzM2NWU3ZCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTUuOTk3IDM3Mi45NzRjMTYuNjI0IDAgMzAuMS0xMi4zNDQgMzAuMS0zOS4xdi0xOC4yNWMwLTUuOTE2LTQuNzk2LTEwLjcxMS0xMC43MTEtMTAuNzExaC0zOC43NzhjLTUuOTE2IDAtMTAuNzExIDQuNzk2LTEwLjcxMSAxMC43MTF2MTguMjUzYy0uMDAxIDI2Ljc1MyAxMy40NzYgMzkuMDk3IDMwLjEgMzkuMDk3eiIgZmlsbD0iI2ZmZTI3YSIgZGF0YS1vcmlnaW5hbD0iI2ZmZTI3YSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTUuOTk3IDM2My45NzRjLTE2LjYyNCAwLTMwLjEtMTMuNDc2LTMwLjEtMzAuMXYxOC41ODFjMCAxNi42MjQgMTMuNDc2IDMwLjEgMzAuMSAzMC4xczMwLjEtMTMuNDc2IDMwLjEtMzAuMXYtMTguNTgxYzAgMTYuNjIzLTEzLjQ3NiAzMC4xLTMwLjEgMzAuMXoiIGZpbGw9IiNmOWNmNTgiIGRhdGEtb3JpZ2luYWw9IiNmOWNmNTgiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4='
                                />
                                Job Title :
                            </label>
                            <Field
                                id='title'
                                className='form-control'
                                name='title'
                                type='title'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                            />
                            {formik.touched.title && formik.errors.title ? (
                                <div className='fw-bold text-danger'>
                                    {formik.errors.title}
                                </div>
                            ) : null}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='username'>
                                <img
                                    alt=''
                                    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUwOS4yODcgNTA5LjI4NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxjaXJjbGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBjeD0iMjU0LjY0NCIgY3k9IjI1NC42NDQiIHI9IjI1NC42NDQiIGZpbGw9IiM1ODg3ZjciIGRhdGEtb3JpZ2luYWw9IiM0YjVhYTciIGNsYXNzPSIiPjwvY2lyY2xlPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik00MjkuNjA1LDExOC42NzVINzkuNjgyYy0xMy45MDIsMC0yNS40MywxMC41MTEtMjUuNDMsMjMuMzk2djIyNS4xNDQgIGMwLDEyLjg4NSwxMS41MjgsMjMuMzk2LDI1LjQzLDIzLjM5NmgzNDkuOTIzYzEzLjkwMiwwLDI1LjQzLTEwLjUxMSwyNS40My0yMy4zOTZWMTQyLjA3MiAgQzQ1NS4wMzYsMTI5LjE4Nyw0NDMuNTA3LDExOC42NzUsNDI5LjYwNSwxMTguNjc1eiIgZmlsbD0iI2YxZjNmNyIgZGF0YS1vcmlnaW5hbD0iI2YxZjNmNyIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGNpcmNsZSBzdHlsZT0iIiBjeD0iMTcyLjI0OSIgY3k9IjIyMS4wNzUiIHI9IjQwLjY4OSIgZmlsbD0iIzVmOWVkYiIgZGF0YS1vcmlnaW5hbD0iIzQ0ODVjNSIgY2xhc3M9IiI+PC9jaXJjbGU+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNMjUxLjkzMSwzMjguOTAxYy03LjQ2LTM2Ljk1OS00MC4zNS02NC43NjMtNzkuMzQzLTY0Ljc2M3MtNzIuMjIzLDI3LjgwNC03OS42ODIsNjQuNzYzSDI1MS45MzF6IiBmaWxsPSIjNWY5ZWRiIiBkYXRhLW9yaWdpbmFsPSIjNDQ4NWM1IiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxyZWN0IHg9IjI3OS4wNTciIHk9IjIxMi45MzgiIHN0eWxlPSIiIHdpZHRoPSIxMzYuOTg1IiBoZWlnaHQ9IjI1LjQzIiBmaWxsPSIjZGVkZWRmIiBkYXRhLW9yaWdpbmFsPSIjZGVkZWRmIj48L3JlY3Q+Cgk8cmVjdCB4PSIyNzkuMDU3IiB5PSIyNzAuOTE5IiBzdHlsZT0iIiB3aWR0aD0iMTM2Ljk4NSIgaGVpZ2h0PSIyNS40MyIgZmlsbD0iI2RlZGVkZiIgZGF0YS1vcmlnaW5hbD0iI2RlZGVkZiI+PC9yZWN0Pgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4='
                                />
                                Username :
                            </label>
                            <Field
                                id='username'
                                className='form-control'
                                name='username'
                                type='username'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />
                            {formik.touched.username &&
                            formik.errors.username ? (
                                <div className='fw-bold text-danger'>
                                    {formik.errors.username}
                                </div>
                            ) : null}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='bio'>
                                <img
                                    alt=''
                                    src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAwQzFGRDsiIGQ9Ik0yNTYsNTEyYy02OC4zOCwwLTEzMi42NjctMjYuNjI5LTE4MS4wMi03NC45OEMyNi42MjksMzg4LjY2NywwLDMyNC4zOCwwLDI1Ng0KCVMyNi42MjksMTIzLjMzMyw3NC45OCw3NC45OEMxMjMuMzMzLDI2LjYyOSwxODcuNjIsMCwyNTYsMHMxMzIuNjY3LDI2LjYyOSwxODEuMDIsNzQuOThDNDg1LjM3MSwxMjMuMzMzLDUxMiwxODcuNjIsNTEyLDI1Ng0KCXMtMjYuNjI5LDEzMi42NjctNzQuOTgsMTgxLjAyQzM4OC42NjcsNDg1LjM3MSwzMjQuMzgsNTEyLDI1Niw1MTJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDhBOEVFOyIgZD0iTTQzNy4wMiw3NC45OEMzODguNjY3LDI2LjYyOSwzMjQuMzgsMCwyNTYsMHY1MTJjNjguMzgsMCwxMzIuNjY3LTI2LjYyOSwxODEuMDItNzQuOTgNCglDNDg1LjM3MSwzODguNjY3LDUxMiwzMjQuMzgsNTEyLDI1NlM0ODUuMzcxLDEyMy4zMzMsNDM3LjAyLDc0Ljk4eiIvPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0U0RjdGRjsiIHBvaW50cz0iMzAxLDM3MSAzMDEsMjIxIDE5MSwyMjEgMTkxLDI1MSAyMTEsMjUxIDIxMSwzNzEgMTkwLDM3MSAxOTAsNDAxIDMyMCw0MDEgMzIwLDM3MSAJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0U0RjdGRjsiIGQ9Ik0yNTYsMTkxYzI0LjgxMywwLDQ1LTIwLjE4Nyw0NS00NXMtMjAuMTg3LTQ1LTQ1LTQ1cy00NSwyMC4xODctNDUsNDVTMjMxLjE4NywxOTEsMjU2LDE5MXoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNDQkVERkQ7IiBkPSJNMjU2LDE5MWMyNC44MTMsMCw0NS0yMC4xODcsNDUtNDVzLTIwLjE4Ny00NS00NS00NVYxOTF6Ii8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0NCRURGRDsiIHBvaW50cz0iMzAxLDM3MSAzMDEsMjIxIDI1NiwyMjEgMjU2LDQwMSAzMjAsNDAxIDMyMCwzNzEgCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo='
                                />
                                Bio :
                            </label>
                            <textarea
                                id='bio'
                                className='form-control'
                                name='bio'
                                type='bio'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.bio}
                            />
                            {formik.touched.bio && formik.errors.bio ? (
                                <div className='fw-bold text-danger'>
                                    {formik.errors.bio}
                                </div>
                            ) : null}
                        </div>
                        {showAlert && (
                            <Alert variant='success'>
                                {' '}
                                <Alert.Heading>
                                    Account Created Successfully
                                </Alert.Heading>
                            </Alert>
                        )}
                        <button
                            type='submit'
                            className='btn btn-success my-2 btn-large w-100'
                        >
                            Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default withRouter(SignupForm)
