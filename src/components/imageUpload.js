import React, {useState} from 'react'

//add import for storage 
function ImageUpload() {
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl,setImageAsUrl]=useState('')
    const [text,setText]=useState('')
    const [divtext,setDivText]=useState('')
    // const handleImageAsFile = (e) => {
    //     const image = e.target.files[0]
    //     console.log(image)
    //     setImageAsFile(URL.createObjectURL(e.target.files[0]))
    // }
    
  console.log(imageAsFile)

  const handleImageUpload=()=>{
      setImageAsUrl(imageAsFile)
      setDivText(text)
  }
  return (
       
    <div className="App" >
         {/* <form onSubmit={handleImageUpload}> */}
            <input 
            type="file"
            onChange={(e)=> setImageAsFile(URL.createObjectURL(e.target.files[0]))}
            />
            <input 
            type="text"
            value={text}
            onChange={(e)=> setText(e.target.value)}
            />
            <button onClick={handleImageUpload}>upload</button>
        {/* </form> */}
           <div>
                <img src={imageAsUrl} width="30px" alt="image tag" />
                <div class="bottom-left">y{divtext}</div>
            </div>
    </div>
  );
}

export default ImageUpload