import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { toast } from "react-toastify";
import axiosInstance from "../axiosConfig"; // Path to your axiosConfig file

export default function Login({ setUser }) {
  // Pass setUser from a parent component
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    if (!username || !password) {
      toast.error("Both username and password are required!", {
        position: "top-center",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.post("/api/auth/signin", {
        username,
        password,
      });

      console.log("Login successful:", response.data);

      // Store user info and token in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: response.data.username,
          email: response.data.email,
          roles: response.data.roles,
          token: response.data.accessToken, // Store the token here
        })
      );

      setUser(response.data); // Update global state if necessary

      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again.",
        { position: "top-right", autoClose: 5000 }
      );
    } finally {
      setLoading(false);
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
