import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  const handleGoogleLogin = () => {
    // Implement Google login functionality here
    console.log("Google login clicked");
  };

  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form 
                onSubmit={Auth} 
                className="box"
                style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
              >
                {isError && <p className="has-text-centered">{message}</p>}
                <h5 className="title is-2 has-text-centered" style={{ fontWeight: 'normal', fontSize: '20px' }}>Masuk</h5>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Masukkan Email"
                      style={{ backgroundColor: 'transparent', border: '1px solid #ddd' }}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan Password"
                      style={{ backgroundColor: 'transparent', border: '1px solid #ddd' }}
                    />
                  </div>
                </div>
                <div className="field is-flex is-align-items-center is-justify-content-space-between">
                  <label className="checkbox" style={{ fontWeight: 'normal', fontSize: '12px', color: '#333' }}>
                    <input type="checkbox" style={{ transform: 'scale(0.8)', marginRight: '5px' }} />
                    Ingat Saya
                  </label>
                  <a href="/forgot-password" style={{ fontWeight: 'normal', fontSize: '12px', color: '#3273dc', textDecoration: 'underline' }}>
                    Lupa Password
                  </a>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                    style={{ backgroundColor: '#3273dc', borderRadius: '20px' }}
                  >
                    {isLoading ? "Loading..." : "Masuk"}
                  </button>
                </div>
                <div className="field mt-3 has-text-centered" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <hr className="hr" style={{ margin: '0', borderColor: '#ddd' }} />
                  <span className="is-size-7" style={{ backgroundColor: '#fff', padding: '0 10px', color: '#333' }}>ATAU</span>
                </div>
                <div className="field mt-3">
                  <button
                    type="button"
                    className="button is-fullwidth"
                    style={{ border: "1px solid #ddd", backgroundColor: '#fff', color: '#333', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '20px' }}
                    onClick={handleGoogleLogin}
                  >
                    Masuk Dengan Google
                  </button>
                </div>
                <div className="field mt-3 has-text-centered">
                  <p style={{ fontSize: '12px', color: '#333' }}>
                    Belum punya akun? <Link to="/register" style={{ color: '#3273dc' }}>Daftar</Link>
                  </p>
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
