import React, { useEffect } from "react";
import app from "../config/firebase";
import { getDatabase, set, ref, push } from "firebase/database";
import LogoOutline from "../../public/assets/images/logo-mark.svg";
import DragAndDropIcon from "../../public/assets/images/icon-upload.svg";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Form = ({ sendDataToMainPage }) => {
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  //* Drag and Drop
  const handleNewImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL for the uploaded file
      const fileURL = URL.createObjectURL(file);

      // Set the src attribute of the image to display the preview
      setAvatarPreview(fileURL);
    } else {
      setImagePreview(null); // Clear the preview if no file is selected
    }
  };

  //* Generate Ticket
  const GenerateTicket = async () => {
    if ((name === "") | (email === "") | (username === "")) {
      alert("Fill all fields");
    } else {
      AddNewTicket();
      sendDataToMainPage(true);
    }
  };

  //* Add ticket to database
  const AddNewTicket = async () => {
    const db = getDatabase(app);
    const ticketRef = ref(db, "tickets");
    const newTicketRef = push(ticketRef);
    await set(newTicketRef, {
      avatarPreview: avatarPreview,
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
        {/* Preview */}
        <img src={avatarPreview} alt="" width={80} height={80} />
        {/* Upload input */}
        <input type="file" onChange={(e) => handleNewImage(e)} />
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
