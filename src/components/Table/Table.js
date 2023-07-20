import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import "./Styles.css";

export default function Table() {
  return (
    <div className="tableContainer">
      <table>
        <Header />
        <Body />
      </table>
    </div>
  );
};
