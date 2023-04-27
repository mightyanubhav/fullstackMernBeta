/**Convert the image into base 64 to sore in databse */

export default function convertToBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = ()=>{
            resolve(fileReader.result)
        }

        fileReader.onerror = (error)=>{
            reject(error);
        }
    });
}