$("#calculate_price").click(function(){
    var rooms = $("#rok").val();
    var kvm = $("#kvm").val();

    var s = 0;
    var m = 0;
    var l = 0;
    var fonsterputs = 540;
    var storstadning = 0;
    var flyttstadning = 0;
    var calc = rooms - 2;

    s = 460 + (rooms - 1) * 115;
    m = s * 2;
    l = s * 4;

    for (var i = 1; i < rooms; i++) { 
        fonsterputs = fonsterputs + 60 + (i -1) * 20;
    }

    if(kvm >= 1 && kvm <= 30){
        storstadning = 1150;
    } else if (kvm >= 31 && kvm <= 50){
        storstadning = 1350;
    } else if (kvm >= 51 && kvm <= 70){
        storstadning = 1550;
    } else if (kvm >= 71 && kvm <= 100){
        storstadning = 1750;
    } else if (kvm >= 101 && kvm <= 150){
        storstadning = 1950;
    } else if (kvm >= 151 && kvm <= 200){
        storstadning = 2400;
    } else if (kvm > 200){
        storstadning = "Be om offert";
    } 

    if(kvm >= 1 && kvm <= 30){
        flyttstadning = 1200;
    } else if (kvm >= 31 && kvm <= 50){
        flyttstadning = 1400;
    } else if (kvm >= 51 && kvm <= 80){
        flyttstadning = 1790 + (kvm - 51) * 30;
    } else if (kvm >= 81 && kvm <= 100){
        flyttstadning = 2660 + (kvm - 80) * 25;
    } else if (kvm >= 101 && kvm <= 200){
        flyttstadning = 3500 + (kvm - 101) * 15;
    } else if (kvm > 200){
        flyttstadning = "Be om offert";
    }

    $("#pris_s").text(s + "kr");
    $("#pris_m").text(m + "kr");
    $("#pris_l").text(l + "kr");
    $("#fonsterputs").text(fonsterputs + "kr");
    if(kvm >= 201) {
        $("#storstadning").text(storstadning);
    } else {
        $("#storstadning").text(storstadning + "kr");
    }
    
    if(kvm >= 201) {
        $("#flyttstadning").text(flyttstadning);
    } else {
        $("#flyttstadning").text(flyttstadning + "kr");
    }
});