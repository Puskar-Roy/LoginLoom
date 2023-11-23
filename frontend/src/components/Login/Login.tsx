import "./Login.css";
import {Link} from 'react-router-dom'
import {  FormEvent, useState, ChangeEventHandler } from "react";

interface FormData {
  email: string;
  password: string;

}

const Login: React.FC = () => {
      const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
      });

        const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };

      const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData);
      };

  return (
    <div>
      <div className="loginContainer">
        <div className="loginMainContainer">
          <div>
            <h1 className="loginHeading">
              Login <span className="loomSpan">Loom</span>
            </h1>
          </div>
          <form className="loginForm" method="post" onSubmit={handleFormSubmit}>
            <div className="formInput">
              <input
                type="text"
                className="email"
                id="email"
                placeholder="Enter Email.."
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="formInput">
              <input
                type="text"
                className="email"
                id="password"
                placeholder="Enter Password.."
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="formInput">
              <input className="loginBtn" type="submit" value="Login" />
            </div>
            <div className="notMember">
              <p>
                Not A User?{" "}
                <Link className="linkregister" to="/register">
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
