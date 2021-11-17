let slide5_count = 1;

slide5();

function slide5(){
    if(slide5_count>=5){
        slide5_count = 1;
    }
    if(slide5_count==1){
        document.getElementById('main-con5').style = "background-image: url(./pics/xm11Lite/section-05-01.jpg);"
        document.getElementById('slide-i1').classList.add("dot-active");
        document.getElementById('slide-i2').classList.remove("dot-active");
        document.getElementById('slide-i3').classList.remove("dot-active");
        document.getElementById('slide-i4').classList.remove("dot-active");
        document.getElementById('color-text').innerHTML = "Snowflake White"
    }
    else if(slide5_count==2){
        document.getElementById('main-con5').style = "background-image: url(./pics/xm11Lite/section-05-02.jpg);"
        document.getElementById('slide-i1').classList.remove("dot-active");
        document.getElementById('slide-i2').classList.add("dot-active");
        document.getElementById('slide-i3').classList.remove("dot-active");
        document.getElementById('slide-i4').classList.remove("dot-active");
        document.getElementById('color-text').innerHTML = "Bubblegum Blue"
    }
    else if(slide5_count==3){
        document.getElementById('main-con5').style = "background-image: url(./pics/xm11Lite/section-05-03.jpg);"
        document.getElementById('slide-i1').classList.remove("dot-active");
        document.getElementById('slide-i2').classList.remove("dot-active");
        document.getElementById('slide-i3').classList.add("dot-active");
        document.getElementById('slide-i4').classList.remove("dot-active");
        document.getElementById('color-text').innerHTML = "Peach Pink"
    }
    else if(slide5_count==4){
        document.getElementById('main-con5').style = "background-image: url(./pics/xm11Lite/section-05-04.jpg);"
        document.getElementById('slide-i1').classList.remove("dot-active");
        document.getElementById('slide-i2').classList.remove("dot-active");
        document.getElementById('slide-i3').classList.remove("dot-active");
        document.getElementById('slide-i4').classList.add("dot-active");
        document.getElementById('color-text').innerHTML = "Truffle Black"
    }
    slide5_count++;
    setTimeout(slide5, 4000);
}

function option_clicked(num){
    if(num==1){
        document.getElementById('img14').src = "./pics/xm11Lite/section-15-01.jpg"
        document.getElementById('oi1').style = "opacity: 1;";
        document.getElementById('oi2').style = "opacity: .6;";
        document.getElementById('oi3').style = "opacity: .6;";
        document.getElementById('color-line').classList.add("pos1");
        document.getElementById('color-line').classList.remove("pos2");
        document.getElementById('color-line').classList.remove("pos3");
    }
    else if(num==2){
        document.getElementById('img14').src = "./pics/xm11Lite/section-15-02.jpg"
        document.getElementById('oi1').style = "opacity: .6;";
        document.getElementById('oi2').style = "opacity: 1;";
        document.getElementById('oi3').style = "opacity: .6;";
        document.getElementById('color-line').classList.remove("pos1");
        document.getElementById('color-line').classList.add("pos2");
        document.getElementById('color-line').classList.remove("pos3");
    }
    else if(num==3){
        document.getElementById('img14').src = "./pics/xm11Lite/section-15-03.jpg"
        document.getElementById('oi1').style = "opacity: .6;";
        document.getElementById('oi2').style = "opacity: .6;";
        document.getElementById('oi3').style = "opacity: 1;";
        document.getElementById('color-line').classList.remove("pos1");
        document.getElementById('color-line').classList.remove("pos2");
        document.getElementById('color-line').classList.add("pos3");
    }
}


window.onscroll = function(){
    y = window.pageYOffset;
    if(y<5774){
        document.getElementById('sec7-wrap').style = "transform: translate(0px, 0px); inset: 0px auto auto 0px; margin: 0px; width: 100%;"
        document.getElementById('sec7-phone').style.opacity = "0"
    }
    if(y>=5774){
        document.getElementById('sec7-wrap').style = "transform: translate(0px, 0px); left: 0px; top: 60.2344px; margin: 0px; width: 100%; height: 1275px; padding: 0px; box-sizing: border-box; position: fixed; "
        document.getElementById('sec7-phone').style.opacity = "0.2366"
    }
    if(y>=5874){
        document.getElementById('sec7-phone').style.opacity = "0.5056"
    }
    if(y>=5974){
        document.getElementById('sec7-phone').style.opacity = "0.7165"
    }
    if(y>=6074){
        document.getElementById('sec7-phone').style.opacity = "0.8691"
    }
    if(y>=6174){
        document.getElementById('sec7-phone').style.opacity = "0.9634"
    }
    if(y>=6274){
        document.getElementById('sec7-phone').style.opacity = "0.9996"
        document.getElementById('sec7-pic').style = "border-radius: 0px;"
        document.getElementById('sec7-img').style = "transform: translate(0px, 0px);"
    }
    if(y>=6374){
        document.getElementById('sec7-phone').style.opacity = "1"
        document.getElementById('sec7-pic').style = "border-radius: 11px;"
        document.getElementById('sec7-img').style = "transform: translate3d(0px, 0px, 0px) scale(0.8289, 0.8289);"
    }
    if(y>=6474){
        document.getElementById('sec7-pic').style = "border-radius: 22px;"
        document.getElementById('sec7-img').style = "transform: translate3d(0px, 0px, 0px) scale(0.6891, 0.6891);"
    }
    if(y>=6574){
        document.getElementById('sec7-pic').style = "border-radius: 30px;"
        document.getElementById('sec7-img').style = "transform: translate3d(0px, 0px, 0px) scale(0.5814, 0.5814);"
        document.getElementById('sec7-top').style.opacity = "0.1742"
    }
    if(y>=6674){
        document.getElementById('sec7-pic').style = "border-radius: 35px;"
        document.getElementById('sec7-img').style = "transform: translate3d(0px, 0px, 0px) scale(0.5056, 0.5056);"
        document.getElementById('sec7-top').style.opacity = "0.4552"
    }
    if(y>=6774){
        document.getElementById('sec7-pic').style = "border-radius: 39px;"
        document.getElementById('sec7-img').style = "transform: translate3d(0px, 0px, 0px) scale(0.462, 0.462);"
        document.getElementById('sec7-top').style.opacity = "0.678"
        document.getElementById('sec7-detail').style.opacity = "0.064"
    }
    if(y>=6874){
        document.getElementById('sec7-pic').style = "border-radius: 40px;"
        document.getElementById('sec7-img').style = "transform: translate3d(0px, 0px, 0px) scale(0.45, 0.45);"
        document.getElementById('sec7-top').style.opacity = "0.8425"
        document.getElementById('sec7-detail').style.opacity = "0.3651"
    }
    if(y>=6974){
        document.getElementById('sec7-top').style.opacity = "0.9488"
        document.getElementById('sec7-detail').style.opacity = "0.6079"
    }
    if(y>=7074){
        document.getElementById('sec7-top').style.opacity = "0.9969"
        document.getElementById('sec7-detail').style.opacity = "0.7925"
    }
    if(y>=7174){
        document.getElementById('sec7-top').style.opacity = "1"
        document.getElementById('sec7-detail').style.opacity = "0.9188"
    }
    if(y>=7274){
        document.getElementById('sec7-detail').style.opacity = "0.9869"
    }
    if(y>=7374){
        document.getElementById('sec7-detail').style.opacity = "1"
        document.getElementById('sec7-wrap').style = "transform: translate(0px, 1641px); inset: 0px auto auto 0px; margin: 0px; width: 100%; height: 1275px; padding: 0px;"
    }
    if(y>=17800){
        setTimeout(function(){
            document.getElementById("sec19img1").style = "transform: translate(0,0); opacity: 1;"
        }, 500);
        setTimeout(function(){
            document.getElementById("sec19img2").style = "transform: translate(0,0); opacity: 1;"
        }, 800);
        setTimeout(function(){
            document.getElementById("sec19img3").style = "transform: translate(0,0); opacity: 1;"
        }, 1100);
        setTimeout(function(){
            document.getElementById("sec19img4").style = "transform: translate(0,0); opacity: 1;"
        }, 1400);
    }
}