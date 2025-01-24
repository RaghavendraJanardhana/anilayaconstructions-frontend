import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic client-side validation
    if (!userName || !password) {
      setErrorMessage("Both username and password are required.");
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:8080/api/employees/login",
        {
          params: { userName, password },
        }
      );
      console.log("Login successful:", response.data);

      if (response.data.role === "owner") {
        navigate("/dashboard");
      } else {
        alert(`Welcome, ${response.data.role}!`);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(
        "Login failed: " +
          (error.response?.data?.message || "Something went wrong.")
      );
    }
  };

  return (
    <Card className="logincard">
      <Card.Body>
        <br />
        <Card.Title>
          <h3 className="text-center">Login</h3>
        </Card.Title>
        <br />
        <br />
        {errorMessage && (
          <div className="text-danger text-center">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            <b>Username:</b>
          </label>
          <input
            className="form-control"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="form-label">
            <b>Password:</b>
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button className="btn btn-warning w-full" type="submit">
            <b>Submit</b>
          </button>
        </form>
      </Card.Body>
    </Card>
  );
}
