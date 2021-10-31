import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';


const Login = () => {
    const { googleHandler } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';



    const handleGoogleLogin = () => {
        googleHandler()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="google-button">
            <button className="btn btn-warning" onClick={handleGoogleLogin}>Googole Sign In</button>
        </div>
    );
};

export default Login;
