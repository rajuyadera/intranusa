import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPortofolio = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [specifikasi, setSpecifikasi] = useState("");
  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    getCctv();
  }, []);

  const getCctv = async () => {
    const response = await axios.get(`http://localhost:5000/cctv/${id}`);
    setTitle(response.data.judul);
    setPrice(response.data.harga);
    setSpecifikasi(response.data.specifikasi);
  };

  const updateCctv = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/cctv/${id}`, {
        title,
        price,
        specifikasi,
      });
      Navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        toast(error.response.data.msg, {
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
    }
  };

  return (
    <div className="columns is-centered mt-5">
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
      <div className="column is-half">
        <form onSubmit={updateCctv}>
          <div className="field">
            <label className="label">Judul</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Judul"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Harga"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Keterangan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={specifikasi}
                onChange={(e) => setSpecifikasi(e.target.value)}
                placeholder="Specifikasi"
              />
            </div>
          </div>
          <br />
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPortofolio;
