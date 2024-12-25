import React from "react";
import LogoOutline from "../../public/assets/images/logo-mark.svg";

const Ticket = () => {
  return (
    <div className="form-container">
      {/* Logo Header */}
      <div className="form-header ticket-header">
        <img src={LogoOutline} alt="LogoOutline" />
        <h1>Coding Conf</h1>
      </div>
      {/* Header Text */}
      <h1 className="header-text">
        Congrats, <span>Jonatan Kristof!</span> <br />
        Your ticket is ready.
      </h1>
      <p className="header-sub-text-ticket">
        we've emailed your ticket to <br />
        <span>jonatan@email.com</span> and will send updates in <br /> the run
        up to the event
      </p>
      <div class="circle-cut"></div>
    </div>
  );
};

export default Ticket;
