import React from "react";
import Title from "../components/Title/Title";
import Weight from "../components/Weight/Weight";
import Height from "../components/Height/Height";
import Calculate from "../components/Calculate/Calculate";
import Result from "../components/Result/Result";
import Table from "../components/Table/Table";
import "./Styles.css";

export default function Main() {
  return (
    <div className="appContainer">
      <div className="bodyContainer">
        <Title />
        <Weight />
        <Height />
        <Calculate />
        <Result />
        <Table />
      </div>
    </div>
  );
};
