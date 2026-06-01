function watch(){
    var TimeNow = new Date().getHours();
    const hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
});
    
   var watchNow = document.getElementById(TimeNow);
   watchNow = TimeNow 
   var openclose = document.getElementById("closeopen")

    if(TimeNow >= 17 && TimeNow < 22){
        document.querySelector(".closeopen").innerHTML =  status.innerHTML = "Estamos abertos 🟢 Aberto";
    }else{
        document.querySelector(".closeopen").innerHTML =  status.innerHTML = "Estamos Fechados 🔴 Fechado";
    }

    document.querySelector(".TimeNowu").innerHTML = 
    `Horario atual:\t ${hora}`;
}

setInterval(watch, 1000);
watch();