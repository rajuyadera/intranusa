import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [portofolio, setPortofolio] = useState([]);
  const [cctv, setCctv] = useState([]);
  const [it, setIt] = useState([]);
  const [panel, setPanel] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getPortofolio();
    getCctv();
    getIt();
    getPanel()
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        Navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");

        config.headers.Authorization = `Bearer ${response.data.accessToken}`;

        setToken(response.data.accessToken);

        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // get Datas
  const getPortofolio = async () => {
    const response = await axios.get("http://localhost:5000/portofolio");
    setPortofolio(response.data);
  };

  const getCctv = async () => {
    const response = await axios.get("http://localhost:5000/cctv");
    setCctv(response.data);
  };

  const getIt = async () => {
    const response = await axios.get("http://localhost:5000/itsupport");
    setIt(response.data);
  };

  const getPanel = async () => {
    const response = await axios.get("http://localhost:5000/panel");
    setPanel(response.data);
  };

  // delete data
  const deletePorto = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/portofolio/${id}`
      );

      toast(response.data.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      getPortofolio();
    } catch (error) {
      toast("API ERROR", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const deleteCctv = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/cctv/${id}`);
      toast(response.data.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      getCctv();
    } catch (error) {
      toast("API ERROR", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const deleteIt = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/itsupport/${id}`
      );
      toast(response.data.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      getIt();
    } catch (error) {
      toast("API ERROR", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const deletePanel = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/panel/${id}`
      );
      toast(response.data.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      getPanel();
    } catch (error) {
      toast("API ERROR", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <h1 className="has-text-centered">Table Portofolio</h1>
        <br />
        <div className="columns is-multiline">
          {portofolio.map((porto) => (
            <div className="column is-one-quarter" key={porto.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-square">
                    <img src={porto.url} alt="img" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4 has-text-centered">
                        {porto.judul}
                      </p>
                      <p className=" is-6">Alamat : {porto.alamat}</p>
                      <p className="subtitle is-6">
                        Keterangan : {porto.keterangan}
                      </p>
                    </div>
                  </div>
                </div>
                <footer className="card-footer">
                  <Link
                    to={`/editportofolio/${porto.id}`}
                    className="button is-success card-footer-item"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => deletePorto(porto.id)}
                    className="button is-danger card-footer-item"
                  >
                    Delete
                  </Link>
                </footer>
              </div>
            </div>
          ))}
        </div>

        <h1 className="has-text-centered text">Table Cctv</h1>
        <br />

        <table class="table is-bordered is-info is-fullwidth has-text-centered">
          <tr class="th is-selected ">
            <th>No</th>
            <th>Judul</th>
            <th>Harga</th>
            <th>Specifikasi</th>
            <th>Aksi</th>
          </tr>
          {cctv.map((cctv, index) => (
            <tr key={cctv.id}>
              <td>{index + 1}</td>
              <td>{cctv.judul}</td>
              <td>{cctv.harga}</td>
              <td>{cctv.specifikasi}</td>
              <td>
                <Link
                  to={`/editcctv/${cctv.id}`}
                  className="button is-info mr-3"
                >
                  Edit
                </Link>
                <Link
                  onClick={() => deleteCctv(cctv.id)}
                  className="button is-danger"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </table>

        <h1 className="has-text-centered text">Table It Support</h1>
        <br />

        <table class="table is-bordered is-striped is-fullwidth has-text-centered">
          <tr class="th is-selected ">
            <th>No</th>
            <th>Judul</th>
            <th>Keterangan</th>
            <th>Aksi</th>
          </tr>
          {it.map((it, index) => (
            <tr key={it.id}>
              <td>{index + 1}</td>
              <td>{it.judul}</td>
              <td>{it.keterangan}</td>
              <td>
                <Link
                  to={`/edititsupport/${it.id}`}
                  className="button is-info mr-3"
                >
                  Edit
                </Link>
                <Link
                  onClick={() => deleteIt(it.id)}
                  className="button is-danger"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </table>

        <h1 className="has-text-centered text">Table Panel</h1>
        <br />

        <table class="table is-bordered is-striped is-fullwidth has-text-centered">
          <tr class="th is-selected ">
            <th>No</th>
            <th>Judul</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
          {panel.map((panel, index) => (
            <tr key={panel.id}>
              <td>{index + 1}</td>
              <td>{panel.judul}</td>
              <td>{panel.harga}</td>
              <td>
                <Link
                  to={`/editsolarhomesystem/${panel.id}`}
                  className="button is-info mr-3"
                >
                  Edit
                </Link>
                <Link
                  onClick={() => deletePanel(panel.id)}
                  className="button is-danger"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Dashboard;
