const btnGroup = document.querySelector("#btnGroup");

btnGroup.addEventListener("click", (evt) => {
    if(evt.target.tagName.toLowerCase() === 'button') 
    {
        const button = evt.target;
        const buttons = document.querySelectorAll("#btnGroup button");
        for (let btn of buttons) {
            btn.style.color = "#1d2d44"
            btn.style.backgroundColor = "#fff"
        }
        button.style.color = "#f0ebd8";
        button.style.backgroundColor = "#1d2d44";
    }
})