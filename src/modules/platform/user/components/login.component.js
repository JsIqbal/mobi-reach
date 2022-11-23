import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { login } from "../admin.actions";
import { loginSchema } from '../admin.schema';

function Login() {
    let navigate = useNavigate();

    return (
        <div className='login-component'>
            <div className='container ' >
                <div className='row'>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        validationSchema={loginSchema}
                        onSubmit={(values, actions) => {
                            const fakeData = {
                                admin : {
                                    email: "admin@gmail.com",
                                    password: "admin"
                                },
                                moderator: {
                                    email: "moderator@gmail.com",
                                    password: "moderator"
                                },
                                parent: {
                                    email: "parent@gmail.com",
                                    password: "parent"
                                },
                                child: {
                                    email: "child@gmail.com",
                                    password: "child"
                                },
                            }
                            login(values)
                                .then(response => {
                                    const adminToken = response.admin;
                                    const moderatorToken = response.moderator;
                                    const parentToken = response.parent;
                                    const childToken = response.child;

                                    if (values.email===fakeData.admin.email && values.password===fakeData.admin.password) {
                                        localStorage.setItem("access_token", adminToken);

                                        navigate("/admin/dashboard", { 
                                            state: { someData: adminToken } 
                                        });
                                    }

                                    if (values.email===fakeData.moderator.email && values.password===fakeData.moderator.password) {
                                        localStorage.setItem("access_token", moderatorToken);

                                        navigate("/moderator/dashboard", { 
                                            state: { someData: moderatorToken } 
                                        });
                                    }

                                    if (values.email===fakeData.parent.email && values.password===fakeData.parent.password) {
                                        localStorage.setItem("access_token", parentToken);

                                        navigate("/parent/dashboard", { 
                                            state: { someData: parentToken } 
                                        });
                                    }

                                    if (values.email===fakeData.child.email && values.password===fakeData.child.password) {
                                        localStorage.setItem("access_token", childToken);

                                        navigate("/child/dashboard", { 
                                            state: { someData: childToken } 
                                        });
                                    }

                                    if (values.email!==fakeData.child.email && values.email!==fakeData.parent.email && values.email!==fakeData.admin.email && values.email!==fakeData.moderator.email) {
                                        alert("Error 404: user not found!")

                                        navigate("/");
                                    }
                                })
                            actions.setSubmitting(false);
                        }}
                    >
                        {(formikprops) => {
                            return (
                                <Form className='row'>
                                        <div 
                                            className='col-lg-5 ms-auto me-auto login-box'
                                        >
                                            <div className='login-header text-center'>
                                                <h2>Mobi Reach</h2>
                                                <h4>Welcome</h4>
                                            </div>
                                            <div className='form-group login-form-input'>
                                                <label 
                                                    htmlFor='username' 
                                                    className='form-label'
                                                >
                                                    Username
                                                    <span style={{color:"red"}}>*</span>
                                                </label>

                                                <Field 
                                                    type="username" 
                                                    className="form-control" 
                                                    id="username" 
                                                    name="username" 
                                                />

                                                <div className='invalid-feedback d-block'>
                                                    <ErrorMessage name="username" />
                                                </div>
                                            </div>

                                            <div className='form-group login-form-input'>
                                                <label 
                                                    htmlFor='password' className='form-label'
                                                >
                                                    Password
                                                    <span style={{color:"red"}}>*</span>
                                                </label>

                                                <Field 
                                                    type="password" 
                                                    className="form-control" 
                                                    id="password" 
                                                    name="password" 
                                                />

                                                <div className='invalid-feedback d-block'>
                                                    <ErrorMessage name="password" />
                                                </div>
                                                <br />
                                            </div>
                                            <div className='form-group m-auto row'>
                                                <div className='col-lg-12'>
                                                    <div className='row'>
                                                        <div className='col-lg-6 ms-auto text-end'>
                                                            <button 
                                                                type="submit mb-4"  
                                                                className="login-form-btn btn"
                                                            >
                                                                LOGIN
                                                            </button>
                                                    
                                                        </div>
                                                        <div className='col-lg-6 me-auto'>
                                                            <Link 
                                                                to='/registration'
                                                                className='login-form-btn btn registration'
                                                            >
                                                                REGISTER
                                                            </Link>
                                                        </div>
                                                        <div className='col-lg-12 mt-4 mb-4'>
                                                            <div className='row'>
                                                                <div className='col-lg-12 text-center mb-2'>
                                                                    <span className='frgt-ps'>
                                                                        {`Forgot Password? `}
                                                                    </span>
                                                                    <Link className='login-link'
                                                                        to='/reset-password'
                                                                    >
                                                                        CLICK HERE
                                                                    </Link>
                                                                </div>
                                                                <div className='col-lg-12 text-center mb-2'>
                                                                    <Link className='login-link'
                                                                        to='/reset-password'
                                                                    >
                                                                        Contact us
                                                                    </Link>
                                                                </div>
                                                                <div className='col-lg-12 text-center'>
                                                                    <Link className='login-link'
                                                                        to='/reset-password'
                                                                    >
                                                                        Terms & Conditions
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login;