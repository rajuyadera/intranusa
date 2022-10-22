import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPortofolio = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    getIt();
  }, []);

  const getIt = async () => {
    const response = await axios.get(`http://localhost:5000/itsupport/${id}`);
    setTitle(response.data.judul);
    setText(response.data.keterangan);
  };

  const updateIt = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/itsupport/${id}`, {
        title,
        text,
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
        <form onSubmit={updateIt}>
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
            <label className="label">Keterangan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Keterangan"
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
