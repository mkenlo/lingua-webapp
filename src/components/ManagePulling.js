import React, { useState } from "react";
import PullingForm from "./PullingForm";
import PullingResult from "./PullingResult";

function ManagePulling() {
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let updatedResult = {
      name: "dataset-english-yemba",
      rows: 89,
      size: "134MB",
      format: ".tar"
    };
    setResult(updatedResult);
  }

  return (
    <>
      <PullingForm onSubmit={handleSubmit} />
      <PullingResult result={result} />
    </>
  );
}

export default ManagePulling;
