import { useState } from "react"
import {Github, Linkedin} from "./SVG"

export default function App(){
  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);

  function handleChange(e){
    const file = e.target.files[0];
    setFile(file);
  }
  
  const handleUpload = async() => {

    console.log("handeling upload...");

    const formData = new FormData(); 
    formData.append("file", file);
    
    const res = await fetch("https://yomibashi.onrender.com/upload", {
      method: "POST", 
      body: formData,
    });
    
    // take response as blob and download immediately 
    // const blob = await res.blob(); 
    // const url= window.URL.createObjectURL(blob);
    // const a = document.createElement("a");
    // a.href = url; 
    // a.download = "converted.srt";
    // document.body.appendChild(a);
    // a.click();
    // a.remove(); 
   
    if(!res.ok) throw new Error("Upload failed");
    const data = await res.json(); 
    console.log("Upload response: ", data);
    
    // save the download url from backend 
    setDownloadURL(`https://yomibashi.onrender.com/download/${data.converted_file}`);
  };
  
  function handleDownload(){
    if (!downloadURL) return alert("No Files to Download yet!");

    console.log("downloading...");
    const a = document.createElement("a");
    a.href = downloadURL ; 
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove(); 
  }

  return(
    <>
      <NavBar />
      <HeroSection />
      <FileManagement handleUpload={handleUpload} handleDownload={handleDownload} handleChange={handleChange} downloadURL={downloadURL}/> 
      <Footer/>
    </>
  )
}

function NavBar(){
  return(
    <div className="nav">
      <p className="logo">YomiBashi</p>
    </div>
  )
}

function HeroSection(){
  return(
    <div className="hero">
      <p className="heading">Subtitle Converter :</p>  
      <p className="sub-heading"> (KANJI &gt; ROMAJI) </p>
      <p className="hero-text">
        Bring Japanese subtitles to life with ease. <br/> Yomibashi instantly converts Kanji subtitles into Romaji, making Japanese content more accessible for learners, travelers, and anime fans alike. No complicated tools, no extra steps—just clear, readable text.
      </p>
    </div>

  )
}

function Button({children, handleClick}){
  return(
    <button className="button" onClick={handleClick}>{children}</button>
  ) 
}

function FileManagement({handleUpload, handleDownload, handleChange, downloadURL}){
  return(
    <div className="file-management">
      <div className="input">
        <label className="upload-btn" htmlFor="upload">CLIQUE 2 ADD FILE</label>
        <input id="upload" type="file" onChange={handleChange}/>
      </div>
      <div className="buttons">
        <Button handleClick={handleUpload}> UPLOAD </Button> 
        {/* <button onClick={handleDownload} disabled={!downloadURL}> Download </button> */}
        {downloadURL &&
          <Button handleClick={handleDownload}> DOWNLOAD </Button>
        }
      </div>
    </div>
  )
}

function Footer(){
  return(
    <footer>
      <div className="rights">
        © 2k26 @neoayus
      </div>
      <div className="socials"> 
        <a href="https://github.com/neoayus"> <Github/> Github</a> 
        <a href="https://www.linkedin.com/in/ayush-semwal-602183285/"> <Linkedin/> Linkedin </a> 
      </div>
    </footer>
  )
}