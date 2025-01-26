import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true); // Start loading

    // Basic client-side validation
    if (!userName || !password) {
      setErrorMessage("Both username and password are required.");
      setLoading(false); // Stop loading
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

      // You could save response data to localStorage here for persistent login
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
    } finally {
      setLoading(false); // Stop loading after API request finishes
    }
  };

  return (
    <>
      {/* Background image */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage: `url(${process.env.PUBLIC_URL}/building.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Titles over background image */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "80px",
            color: "yellow",
            fontFamily: "Roboto, serif",
            fontSize: "3rem",
          }}
        >
          <h1>My ಸೂರು Best Private</h1>
        </div>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "80px",
            color: "white",
            fontFamily: "Roboto, serif",
            fontSize: "3rem",
          }}
        >
          <h1>Builders</h1>
        </div>

        {/* Login Card */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
          }}
        >
          <Card className="logincard" style={{ width: "400px" }}>
            <Card.Body>
              <Card.Title>
                <h3 className="text-center">Login</h3>
              </Card.Title>

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
                  required
                />

                <label className="form-label">
                  <b>Password:</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
                <button
                  className={`btn btn-warning w-full ${
                    loading ? "disabled" : ""
                  }`}
                  type="submit"
                  disabled={loading} // Disable button during loading
                >
                  {loading ? "Loading..." : <b>Submit</b>}
                </button>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
