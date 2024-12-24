import React from "react";
import LogoOutline from "../../public/assets/images/logo-mark.svg";
import DragAndDropIcon from "../../public/assets/images/icon-upload.svg";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Form = () => {
  //* Drag and Drop
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  //* handle inputs

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
          <input type="text" name="full-name" placeholder="john wood" />
        </div>
        <div className="other">
          <label htmlFor="email-address">Email Address</label>
          <input
            type="email"
            name="email-address"
            placeholder="example@email.com"
          />
        </div>
        <div className="other">
          <label htmlFor="username">Github Username</label>
          <input type="text" name="username" placeholder="@username" />
        </div>
        {/* Button */}
        <button>Generate My Ticket</button>
      </div>
    </div>
  );
};

export default Form;
