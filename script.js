console.log("script running ......");
//FOR NAVBAR TOGGLING EFFECT
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo') ;//it will remove sidebargo from sidebar if present and add if absent
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        // CONTAINS CHECK IF THE SIDEBAR CONTAIN ANY CLASS SIDEBARGO
        // if yes then make the hamburger inline and cross to be none display
        
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.ham').style.display='none';
        // TO MAKE CROSS COME WITH CONTENT AND NOT INSTANTLY and now it will come after 300 milliseconds
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline';
            
        }, 300);
    }
});
