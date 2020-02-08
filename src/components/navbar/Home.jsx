import React, { useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Home() {
  const { loading, setDisableSpinner, setLoading } = useContext(DataContext);
  useEffect(() => {
    setLoading(false);
  }, []);
  return <div className="div_padding"></div>;
}
