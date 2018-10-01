$(function(){
    "use strict";
    
    $("#login").on("click",function(){
        var username = $("#username").val();
        var password = $("#password").val();
        if(username && (username === password)) {
            if(username === "pharmacist") {
                location.href = "./pharmacist_index.html";
            } else if(username === "patient") {
                location.href = "./patient_index.html";
            }
        }
        return false;
    });
});