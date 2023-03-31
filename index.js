let btn = document.getElementById('click')
let newBtn = document.createElement("button");
let clickDiv = document.getElementById("click_div")
btn.addEventListener('click',function next(){
    btn.remove()
    clickDiv.append(newBtn)
    newBtn.classList.add("w-fit", "h-fit","bg-white", "text-black", "text-3xl", "rounded-xl", "px-4","py-2","hover:bg-black", "hover:text-white")
    newBtn.innerText = "YOU CLICKED THIS"
})
newBtn.addEventListener("click", function past(){
    newBtn.remove()
    clickDiv.append(btn)
    btn.classList.add("w-fit", "h-fit","bg-white", "text-black", "text-3xl", "rounded-xl", "px-4","py-2", "hover:bg-black", "hover:text-white")
    btn.innerText = "CLICK ME"
})