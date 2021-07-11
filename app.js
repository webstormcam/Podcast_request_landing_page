function validateForm(){
    let x=document.getElementById('email').value;
    let text;
    if (x ===''){
        text='Please input an email'
    }
    document.getElementById('error').innerHTML=text;
}