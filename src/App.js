import React, { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <Form />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
