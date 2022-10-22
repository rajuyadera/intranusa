import React, { useState } from "react";
import "../app.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };


  return (
    <section className="hero has-background-info is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <h2 className="login has-text-white has-text-centered mb-3 ">
                ACCOUNT LOGIN
              </h2>
              <form onSubmit={Auth} className="box">
                {msg && (
                  <div class="notification is-danger" onChange={msg}>
                    <button class="delete"></button>
                    <strong>{msg}</strong>
                  </div>
                )}
                <div className="field mt-5">
                  <label className="label ">Email</label>
                  <div className="controls">
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label ">Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="*******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <nav class="level">
                  <div class="level-item has-text-centered">
                    <div>
                      <a href="/" className="button is-danger is-light" >Forgot Password?</a>
                    </div>
                  </div>
                  <div class="level-item has-text-centered">
                    <div>
                      <a href="/register" className="button is-info is-light">Create an Account</a>
                    </div>
                  </div>
                </nav>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth ">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
