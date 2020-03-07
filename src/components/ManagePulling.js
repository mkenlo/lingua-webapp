import React, { useState, useEffect } from "react";
import PullingForm from "./PullingForm";
import PullingResult from "./PullingResult";
import { getLanguages } from "../api/languageApi";

function ManagePulling() {
  const [result, setResult] = useState(null);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    getLanguages()
      .then(data => {
        setLanguages(data.results);
      })
      .catch(err => console.log(err));
  }, [languages]);

  function handleSubmit(event) {
    event.preventDefault();
    let updatedResult = {
      // this is just a placeholder
      name: "dataset-english-yemba",
      rows: 89,
      size: "134MB",
      format: ".tar"
    };
    setResult(updatedResult);
  }

  return (
    <>
      <PullingForm onSubmit={handleSubmit} languages={languages} />
      <PullingResult result={result} />
    </>
  );
}

export default ManagePulling;
