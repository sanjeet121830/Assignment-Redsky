import React,{useState} from "react";

function Question2() {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="App">
        <h1>Take image and convert Base64</h1>
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
      <br></br>
      <img src={baseImage} height="200px" alt="images" />
      <br/>
      <h1>Base64 Url:</h1>
    <p>{baseImage}</p>
    </div>
  );
}

export default Question2;
