import { Link } from "react-router-dom";
import { ChangeEventHandler, FormEvent, useState } from "react";
import "./Register.css";


interface FormData {
  name: string;
  email: string;
  password: string;
  cpassword: string;
}


const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };
  return (
    <div>
      <div className="registerContainer">
        <div className="registerMainContainer">
          <div>
            <h1 className="registerHeading">
              Register <span className="loomSpan">Loom</span>
            </h1>
          </div>
          <form
            className="registerForm"
            method="post"
            onSubmit={handleFormSubmit}
          >
            <div className="formInput">
              <input
                type="text"
                className="name"
                id="name"
                placeholder="Enter Name.."
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="formInput">
              <input
                type="email"
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
                type="password"
                className="password"
                id="password"
                placeholder="Enter Password.."
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="formInput">
              <input
                type="password"
                className="cpassword"
                id="cpassword"
                placeholder="Enter Confirm Password.."
                name="cpassword"
                value={formData.cpassword}
                onChange={handleInputChange}
              />
            </div>
            <div className="formInput">
              <input className="registerBtn" type="submit" value="Register" />
            </div>
            <div className="notMember">
              <p>
                Already User?{" "}
                <Link className="linkregister" to="/">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
