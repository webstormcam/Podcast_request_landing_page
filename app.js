function validateForm(){
    let x=document.getElementById('email').value;
    let text;
    if (x ===''){
        text=' Oops! Please add your email'
    } else if (x.includes('@')===false){
        text='Please input a proper email'
    } else{
        validateForm()
    }
    document.getElementById('error').innerHTML=text;
}