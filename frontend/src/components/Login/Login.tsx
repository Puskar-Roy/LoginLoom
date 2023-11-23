import "./Login.css";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="loginContainer">
        <div className="loginMainContainer">
          <div>
            <h1 className="loginHeading">
              Login <span className="loomSpan">Loom</span>
            </h1>
            {/* <p>Login Here</p> */}
          </div>
          <form className="loginForm" method="post">
            <div className="formInput">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="text"
                className="email"
                id="email"
                placeholder="Enter Email.."
                name="email"
              />
            </div>
            <div className="formInput">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="text"
                className="email"
                id="password"
                placeholder="Enter Password.."
                name="password"
              />
            </div>
            <div className="formInput">
              <input className="loginBtn" type="submit" value="Login" />
            </div>
            <div className="notMember">
              <p>
                Not A User? <Link className="linkregister" to="/register">
                   Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
