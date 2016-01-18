$(document).ready(function(){
    $('form').submit(function(){
        var userName = $('#username-input').val();
        var inputPassword = $('#password-input').val();
        
        if(userName === ""){
            $('.username-error').text('Please enter your username');
        }
        else if(inputPassword === ""){
            $('.password-error').text('Please type your password');   
        }
        else if(inputPassword.length < 8){
            $('.password-error').text('Password must be at least 8 characters');
        }
        return false;
    });
    
});