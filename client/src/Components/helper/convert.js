
 export default function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    let fileReader=new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload=()=>{
        resolve(fileReader.result)
    }

    fileReader.onerror=(error)=>{
        reject(error)
    }
  })  
 }