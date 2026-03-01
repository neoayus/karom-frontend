import { useState } from "react"

export default function App(){
  const [file, setFile] = useState(null);

  function handleChange(e){
    const file = e.target.files[0];
    setFile(file);
  }
  
  const handleUpload = async() => {

    console.log("haneling upload...");

    const formData = new FormData(); 
    formData.append("file", file);
    
    const res = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST", 
      body: formData,
    });
    
    // take response as blob and download immediately 
    const blob = await res.blob(); 
    const url= window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url; 
    a.download = "converted.srt";
    document.body.appendChild(a);
    a.click();
    a.remove(); 
  }

  return(
    <>
      <h2>KA-ROM : Kanji 2 Romaji Subtitle Converter </h2>
      <input type="file" onChange={handleChange}/>
      <button onClick={handleUpload}>Upload</button>
    </>
  )
}