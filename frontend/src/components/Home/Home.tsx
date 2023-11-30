import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home: React.FC = () => {
  const navigate = useNavigate();

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
        console.log("Auth Done !");
      } else if (response.data.isAuthorized === false) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []); // Make sure to include checkUser in the dependency array

  return <div>home</div>;
};

export default Home;
