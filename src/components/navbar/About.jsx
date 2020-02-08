import React, { useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import NavbarComp from "./NavbarComp";

export default function About() {
  const { loading, setDisableSpinner, setLoading } = useContext(DataContext);

  useEffect(() => {
    setDisableSpinner(false);
    setLoading(true);
    // console.log(loading);
  }, []);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
