const displayMsg=(msg,id,colorname)=>{
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=colorname

}

const fnameValidate=()=>{
    const first_name=document.getElementById('fname').value
    if(first_name==""){
        displayMsg('First name is mandatory','fnameMsg','red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('First name must contain alphabets only','fnameMsg','red')
        return false
    }
    else if(first_name.length<3){
        displayMsg('First name must be more than 2 character','fnameMsg','red')
        return false
    }else{
        displayMsg('','fnameMsg','green')
        return true

    }
}

const lnameValidate=()=>{
    const last_name=document.getElementById('lname').value
    if(last_name==""){
        displayMsg('Last name is mandatory','lnameMsg','red')
        return false
    }
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg('Last name must contain alphabets only','lnameMsg','red')
        return false
    }
    else if(last_name.length<3){
        displayMsg('Last name must be more than 2 character','lnameMsg','red')
        return false
    }else{
        displayMsg('','lnameMsg','green')
        return true

    }
}

const unameValidate=()=>{
    const user_name=document.getElementById('uname').value
    if(user_name==""){
        displayMsg('User name is mandatory','unameMsg','red')
        return false
    }
    else if(!user_name.match(/^([a-zA-Z])+$/)){
        displayMsg('Last name must not contain numeric values','unameMsg','red')
        return false
    }
    else if(user_name.length<3){
        displayMsg('User name must be more than 2 character','unameMsg','red')
        return false
    }else{
        displayMsg('','unameMsg','green')
        return true

    }
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

const phoneValidate=()=>{
    const phone=document.getElementById('phone').value
    if(phone==""){
        displayMsg('Phone number is mandatory','phoneMsg','red')
        return false
    }
    else if(!phone.match(/^98\d{8}$/)) {
        displayMsg('Invalid phone number format','phoneMsg','red')
        return false

    }else{
        displayMsg(' ','phoneMsg','green')
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
        displayMsg('Weak password must be greater than 8 contain a number and special character','pwdMsg','red')
        return false
    }else{
        displayMsg('Password is strong','pwdMsg','green')
        return true
    }
}

const validForm=()=>{
    if(fnameValidate() &&lnameValidate() &&unameValidate() &&emailValidate() &&phoneValidate() &&pwdValidate()){
        return true
    }
    else
    return false
}


