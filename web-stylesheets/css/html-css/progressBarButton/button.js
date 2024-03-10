const btn = document.querySelector(".btn");
text = document.querySelector(".text");

btn.addEventListener("click", ()=>{
    btn.classList.add("progress");
    text.innerText = "Uploading...";

    setTimeout(()=> {
        btn.classList.remove("progress");
        text.innerText = "Uploaded";        
    }, 6000);
});