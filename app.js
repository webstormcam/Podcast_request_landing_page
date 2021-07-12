function validateForm(){
    let x=document.getElementById('email').value;
    let text;
    if (x ===''){
        text=' Oops! Please add your email'
    
        
    } else if (x.length>0 && x.includes('@')===false){
        text='Please input a proper email'
   
    } 
    document.getElementById('error').innerHTML=text;
}