function check(){
    var pass1 = document.getElementById('crpass').value;
    var pass2 = document.getElementById('cnpass').value;
    if(pass1===pass2){
        document.getElementById("btn").submit();
    }
    else{
        alert("Password Not Match");
    }
}
