const displayMsg=(msg,id,colorname)=>{
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=colorname

}
const emailValidate=()=>{
    const email=document.getElementById('email').value
    if(email==""){
        displayMsg('Email is mandatory','emailMsg','red')
        return false
    }
    else if(!email.match(/^([a-z0-9])[a-z0-9\-\_\.]+\@+([a-z])+\.+([a-z])+$/)) {
        displayMsg('Invalid email format','emailMsg','red')
        return false

    }else{
        displayMsg(' ','emailMsg','green')
        return true
    }

}

const pwdValidate=()=>{
    const password=document.getElementById('pwd').value
    if(password==""){
        displayMsg('Password is mandatory','pwdMsg','red')
        return false
    }
    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$?!]).{8,100}$/ )){
        displayMsg('Weak password ','pwdMsg','red')
        return false
    }else{
        displayMsg('Password is strong','pwdMsg','green')
        return true
    }
}

const validForm=()=>{
    if(emailValidate() && pwdValidate()){
        console.log("logged in")
        return true
    }
    else
    return false
}