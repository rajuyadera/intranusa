import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddIt = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const Navigate = useNavigate();

  const saveIt = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/itsupport", {
        title: title,
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
        <form className="box" onSubmit={saveIt}>
          <div className="field">
            <label className="label">Judul</label>
            <div className="control">
              <input
                type="text"
                className="input is-link"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Judul"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Keterangan</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              class="textarea is-link"
              placeholder="Keterangan"
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

export default AddIt;
