
let saturate = document.getElementById("saturation")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blur = document.getElementById("blur")
let hueRotate = document.getElementById("hueRotate")

let upload = document.getElementById("upload")
let download = document.getElementById("download")
let img = document.getElementById("img")

let reset = document.querySelector('span')
let imgBox = document.querySelector('.image-box')

// Start Functions
function resetValue(){
    saturate.value='100'
    contrast.value='100'
    brightness.value='100'
    sepia.value='0'
    grayscale.value='0'
    blur.value='0'
    hueRotate.value='0'
    ctx.filter='none'
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
}
// End Functions

window.onload = function(){
    download.style.display='none'
    reset.style.display='none'
    imgBox.style.display='none'
}

// upload btn
upload.onchange = function(){
    download.style.display='block'
    reset.style.display='block'
    imgBox.style.display='block'

    let file = new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload = function(){
        img.src = file.result;

    }
    img.onload=function(){
        canvas.width = img.width
        canvas.height = img.height

        ctx.drawImage(img,0,0,canvas.width,canvas.height)
        img.style.display='none'
        resetValue()
    }
}

// filters
let filters = document.querySelectorAll('ul li input')
filters.forEach( filter =>{
    filter.addEventListener("input" , function(){
        ctx.filter=`
            saturate(${saturate.value}%)  
            contrast(${contrast.value}%) 
            brightness(${brightness.value}%)  
            sepia(${sepia.value}%)  
            grayscale(${grayscale.value})  
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
    })

} )

// reset btn
reset.addEventListener("click" , ()=>{
    resetValue()
})


// download btn
let convas=document.getElementById("canvas")
const ctx = canvas.getContext('2d')

download.onclick=function(){
    download.href=canvas.toDataURL()
}