console.log("Script running...")
document.querySelector('.X').style.display = 'none';
document.querySelector('.divham').addEventListener("click", ()=>
{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.Hamburger').style.display = 'inline'
        document.querySelector('.X').style.display = 'none'
    }
    else{
        document.querySelector('.Hamburger').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.X').style.display = 'inline'
        }, 400);
    }

})