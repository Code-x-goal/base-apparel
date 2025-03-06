function error(event){
    event.preventDefault();

    const emailInput=document.getElementById("input");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailPattern.test(emailInput.value)){
        document.getElementById("err").style.display="block";
        document.getElementById("errn").style.display="block";
        document.querySelector("input").style.borderColor="red";
    }
    else{
        document.getElementById("err").style.display="none";
        document.getElementById("errn").style.display="none";
        document.querySelector("input").style.borderColor="unset";
    }

    }