import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import app from "../config/firebase";
import { getDatabase, set, ref, push } from "firebase/database";
import LogoOutline from "../../public/assets/images/logo-mark.svg";
import DragAndDropIcon from "../../public/assets/images/icon-upload.svg";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Form = () => {
  const [avatar, setAvatar] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  //* Drag and Drop
  const onDrop = useCallback((acceptedFiles) => {
    setAvatar(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  //* Generate Ticket
  const GenerateTicket = () => {
    if ((name === "") | (email === "") | (username === "")) {
      alert("Fill all fields");
    } else {
      AddNewTicket();
      navigate("/ticket");
    }
  };

  //* Add ticket to database
  const AddNewTicket = async () => {
    const db = getDatabase(app);
    const ticketRef = ref(db, "tickets");
    const newTicketRef = push(ticketRef);
    await set(newTicketRef, {
      avatar: avatar,
      name: name,
      email: email,
      username: username,
    })
      .then(alert("new ticket added"))
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div className="form-container">
      {/* Logo Header */}
      <div className="form-header">
        <img src={LogoOutline} alt="LogoOutline" />
        <h1>Coding Conf</h1>
      </div>
      {/* Header Text */}
      <h1 className="header-text">
        Your Journey to Coding Conf <br />
        2025 Starts Here!
      </h1>
      <p className="header-sub-text">
        Secure your spot at next year's biggest coding conference
      </p>
      {/* All Inputs */}
      <div className="input-container">
        {/* Upload input */}
        <div {...getRootProps()} className="upload-box">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div className="upload-select-box">
              <div>
                <img src={DragAndDropIcon} alt="" />
              </div>
              <p>Drag 'n' drop some files here</p>
            </div>
          )}
        </div>
        {/* Other inputs */}
        <div className="other">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            name="full-name"
            placeholder="john wood"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="other">
          <label htmlFor="email-address">Email Address</label>
          <input
            type="email"
            name="email-address"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="other">
          <label htmlFor="username">Github Username</label>
          <input
            type="text"
            name="username"
            placeholder="@username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* Button */}
        <button onClick={GenerateTicket}>Generate My Ticket</button>
      </div>
    </div>
  );
};

export default Form;
