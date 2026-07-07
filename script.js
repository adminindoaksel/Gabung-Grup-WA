const API = "https://script.google.com/macros/s/AKfycbyCtuNe9dAEajYUAjd5r28j5PUWOssDwBWIlkdkAVEpKHBTiC5ytCJw3PxANNxUGzZ8cg/exec";

fetch(API)
.then(res=>res.json())
.then(data=>{

    if(data.success){

        document.getElementById("status").innerHTML =
            "Menghubungkan ke:<br><b>"+data.nama+"</b>";

        setTimeout(function(){

            window.location.href = data.url;

        },1000);

    }else{

        document.getElementById("status").innerHTML =
            data.message;

    }

})
.catch(()=>{

    document.getElementById("status").innerHTML =
        "Tidak dapat terhubung ke server.";

});
