import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { PageTitle } from 'components/shared';
import { useForm } from "react-hook-form";
import { useMutate } from "restful-react";
import { useRouter } from 'next/router';


function Login () {
    const router = useRouter();
    const {mutate: login, loading, error}
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = FormData => {
        alert(JSON.stringify(FormData))
    }
    return (
        <div class = "h-100 d-flex align-items-center flex-column justify-content-center d-inline p-2 bg-dark text-white">
            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className = "form-group">
                <input ref = {register} type = "text" name = "username" id = "username-field" class = "login-form-field" placeholder = "Username">
                
                </input>
                </div>
                
                <br></br>
                <br></br>
                <div className = "form-group">
                <input ref = {register({required: true, minlength: 5})} type = "password" name = "password" id = "password-field" class = "login-form-field" placeholder = "Password">

                </input>
                </div>
                <br></br>
                <br></br>
                <div className = "form-group">
                <input type = "submit" value = "Login" id = "login-form-submit">

                </input>
                </div>
                
            </form>
        </div>
    )

}

export default Login