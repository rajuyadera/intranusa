import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addcctv = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [text, setText] = useState("");
  const Navigate = useNavigate();

  const saveCctv = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/cctv", {
        title: title,
        price: price,
        text: text,
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
        <form className="box" onSubmit={saveCctv}>
          <div className="field">
            <label className="label">Judul</label>
            <div className="control">
              <input
                type="text"
                className="input is-link"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Judul CCTV"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input
                type="number"
                className="input is-link"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Harga"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Specifikasi</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              class="textarea is-link"
              placeholder="Specifikasi"
            ></textarea>
          </div>
          <br />
          <div className="field">
            <button type="submit" className="button is-success">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addcctv;
