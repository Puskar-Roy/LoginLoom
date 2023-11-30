import { FormEvent, useState, ChangeEventHandler, useContext , useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

interface GlobalContextProps {
  theme: string;
  toggle: () => void;
  token: string;
  addToken: (arg0: string) => void;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const contextValue = useContext(GlobalContext) as
    | GlobalContextProps
    | undefined;

  if (!contextValue) {
    return null;
  }

  const { addToken } = contextValue;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const checkUser = async () => {
    const token = localStorage.getItem("jwt_token");

    try {
      const response = await axios.get(
        `http://localhost:5000/api/auth/checkUser`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (response.data.isAuthorized === true) {
        navigate("/home");
      } else if (response.data.isAuthorized === false) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(
      `http://localhost:5000/api/auth/login`,
      formData,
      { withCredentials: true }
    );
    try {
      const token = response.data.jwt_token;
      document.cookie = `jwt=${token}; max-age=${60 * 60 * 24 * 7}; path=/`;

      localStorage.setItem("jwt_token", token);
      addToken(token);
      navigate("/home");
    } catch (error) {
      navigate("/");
    }
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
