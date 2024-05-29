form.addEventListener("submit", ()=> {
    const register = {
        email: email.value,
        username: username.value,
        password: password.value,
        password_check: password_check.value
    }

    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => res.json())
        .then(data =>{
        if (data.status == "error"){
            success.style.display = "none"
            error.style.display = "block"
            error.innerText = data.error
            console.log("inside event listener");
        }else{
            success.style.display = "block"
            error.style.display = "none"
            success.innerText = data.success
            window.location.href = "/login";
        }
    })
})