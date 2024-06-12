const fs = require('fs');

async function readFilePeopleData() {

    const fileContent = await fs.promises.readFile("./ejercicio-1/hacienda.json", "utf-8");
    // Transformar el string en un array de objetos
    const parsedData = JSON.parse(fileContent);
    console.log(parsedData);

}
//readFilePeopleData();
async function readFilePeopleDataJustName() {

    const fileContent = await fs.promises.readFile("./ejercicio-1/hacienda.json", "utf-8");
    // Transformar el string en un array de objetos
    const parsedData = JSON.parse(fileContent);
    for (let i = 0; i < parsedData.length; i++) {
        console.log(parsedData[i].nombre);
      }
}
//readFilePeopleDataJustName();
async function readFilePeopleDataJustHasDni(dni) {

    const fileContent = await fs.promises.readFile("./ejercicio-1/hacienda.json", "utf-8");
    // Transformar el string en un array de objetos
    const parsedData = JSON.parse(fileContent);
    for (let i = 0; i < parsedData.length; i++) {
        if(parsedData[i].dni==dni && parsedData[i].notificacionesPendientes==true){
            console.log("El/la contribuyente "+parsedData[i].nombre+" tiene notificaciones pendiente. \nSe enviara un mail a "+parsedData[i].email);
        } 
      }
}
readFilePeopleDataJustHasDni("32109876Q");




