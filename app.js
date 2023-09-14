var myWindow; 
function openwin(){
    myWindow = window.open("", "info", "width = 400",
    "heigh = 200", "top=200",);
}

function closewin(){
    if (myWindow){
        myWindow.close();
    }
}

function checkwin(){
    if (!myWindow){
        document.getElementById("msg").innerHTML =
        "Mywindow has not been opened";
    }
    else{
        if(myWindow.closed){
            document.getElementById("msg").innerHTML = "Mywindow has been oclosed!"
        }
    }

}

const opened = document.querySelector('#opened')
const closeed = document.querySelector('#closed')
// browser objects: window
opened.addEventListener('click', ()=>{
    window.open("show_hide_new.html", "height = 100px, width = 100px", false)
})
closed.addEventListener('click', ()=>{
    window.close()
})