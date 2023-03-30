import './Login.css'

function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">what's social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world you on what's social
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder='Password' className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginCreateButton">Create New Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Login;