import React from 'react'

function imageupload() {
    const Fun=()=>{
        const data=document.getElementsByTagName("input")[0].files[0];
      
      const mydata=new FormData()
      mydata.append("file",data);
      axios.post("http://localhost:9000/Image",mydata)
      .then(res=>{
        console.log(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
      }
      return (
        <>
         <input type='file'/>
         <button onClick={Fun}>Submit</button>
        </>
      )
}

export default imageupload
