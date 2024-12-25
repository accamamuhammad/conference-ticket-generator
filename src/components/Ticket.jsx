import React from "react";
import { useState, useEffect } from "react";
import LogoOutline from "../../public/assets/images/logo-mark.svg";
import app from "../config/firebase";
import { getDatabase, get, ref } from "firebase/database";

const Ticket = () => {
  const [data, setData] = useState([]);

  const getDataFromDatabase = async () => {
    const db = getDatabase(app);
    const ticketRef = ref(db, "tickets");
    try {
      const snapshot = await get(ticketRef);
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val());
        setData(data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // getDataFromDatabase();
  }, []);

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
      <div className="circle-cut"></div>
    </div>
  );
};

export default Ticket;
