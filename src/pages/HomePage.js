import React from "react";
import DownloadForm from "../components/DownloadForm";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <h1>Download a dataset</h1>
      <p className="lead">
        Choose input Source language and Target Language to pull a dataset{" "}
      </p>
      <DownloadForm />
    </Container>
  );
}

export default HomePage;
