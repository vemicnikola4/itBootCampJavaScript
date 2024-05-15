
let generateImage = src => {
    let img = document.createElement("img");
    img.src = src;
    img.style.width = "400px";
    // img.width = 400;
    return img;
    //kreirali smo obj u dom stablu i vratili tu slicicu.
}

// export{
//    generateImage
// };
export default generateImage;
//kod defoltnog mora tacno jedna stavka i nemoraju zagrade.
//moramo i import da promenimo