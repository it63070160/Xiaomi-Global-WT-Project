let slide_count = 1;
let x = 405;
let plus_x = 0;
let pause = 0;
let text_count = 1;
slide1();

function slide1(){
    if(text_count>=4){
        text_count = 1;
    }
    if(pause==1){
        x = 405;
        text_count = 1;
    }
    plus_x = x - 648.55;
    if(pause==1){
        document.getElementById('slide').style = "width: 4968px; opacity: 1; transform: translate3d("+(plus_x)+"px, 0px, 0px);"
        document.getElementById('sp'+slide_count).style = "transform: scale(1.5);";
        document.getElementById('sec15-ti1').classList.add('active-text');
        document.getElementById('color-line').classList.add("pos1");
        document.getElementById('sec15-txt1').style = "opacity: 1;";
        pause = 0;
    }
    else{
        document.getElementById('slide').style = "width: 4968px; opacity: 1; transform: translate3d("+plus_x+"px, 0px, 0px); transition: -webkit-transform 500ms ease 0s;"
        document.getElementById('sp'+slide_count).style = "transform: scale(1.5); transition: transform .3s linear;";
        document.getElementById('sec15-ti'+text_count).classList.add('active-text');
        document.getElementById('color-line').classList.add("pos"+text_count);
        document.getElementById('sec15-txt'+text_count).style = "opacity: 1;";
    }
    x = plus_x;
    setTimeout(function(){
        document.getElementById('sp'+slide_count).style = "transform: scale(1); transition: transform .3s linear;"
        document.getElementById('sec15-ti'+text_count).classList.remove('active-text');
        document.getElementById('color-line').classList.remove("pos"+text_count);
        document.getElementById('sec15-txt'+text_count).style = "opacity: 0;";
        if(slide_count>=4){
            slide_count = 0;
            pause = 1;
        }
        text_count++;
        slide_count++;
    }, 2000)
    setTimeout(slide1, 2000);
}


let anim_close = 0;

window.onscroll = function(){
    y = window.pageYOffset;
    console.log(y);
    if(y<250){
        document.getElementById('sec1-wrap').style = "transform: translate(0px, 0px); inset: 0px auto auto 0px; margin: 0px; width: 100%; height: 969px; padding: 0px;";
    }
    if(y>=250){
        document.getElementById('sec1-wrap').style = "transform: translate(0px, 0px); top: 0px; left: 0px; margin: 0px; width: 100%; height: 969px; padding: 0px; position:fixed; box-sizing: border-box;";
        document.getElementById('sec1-tb').style.opacity = "1";
        document.getElementById('hp').style = "transform: translate(0px, 0px)";
        document.getElementById('hp2').style = "transform: translate(0px, 0px)";
    }
    if(y>=350){
        document.getElementById('sec1-tb').style.opacity = "0.4411";
        document.getElementById('hp').style = "transform: translate3d(0px, -37.1%, 0px)";
        document.getElementById('hp2').style = "transform: translate3d(0px, -12.7%, 0px)";
    }
    if(y>=450){
        document.getElementById('sec1-tb').style.opacity = "0.015";
        document.getElementById('hp').style = "transform: translate3d(0px, -58.35%, 0px)";
        document.getElementById('hp2').style = "transform: translate3d(0px, -50.3%, 0px)";
        document.getElementById('sec1-bot-wrap').style = "transform: translate(0px, 100%);";
    }
    if(y>=550){
        document.getElementById('sec1-tb').style.opacity = "0";
        document.getElementById('hp').style = "transform: translate3d(0px, -59.1%, 0px)";
        document.getElementById('hp2').style = "transform: translate3d(0px, -59.2%, 0px)";
        document.getElementById('sec1-bot-wrap').style = "transform: translate3d(0px, -4.6%, 0px);";
    }
    if(y>=650){
        document.getElementById('sec1-bot-wrap').style = "transform: translate3d(0px, -23.65%, 0px);";
    }
    if(y>=750){
        document.getElementById('sec1-bot-wrap').style = "transform: translate3d(0px, -40.5%, 0px);";
    }
    if(y>=850){
        document.getElementById('sec1-bot-wrap').style = "transform: translate3d(0px, -55.3%, 0px);";
    }
    if(y>=950){
        document.getElementById('sec1-bot-wrap').style = "transform: translate3d(0px, -67.5%, 0px);";
    }
    if(y>=1050){
        document.getElementById('sec1-bot-wrap').style = "transform: translate3d(0px, -77.7%, 0px);";
    }
    if(y>=1150){
        document.getElementById('sec1-bot-wrap').style = "transform: translate3d(0px, -85.5%, 0px);";
    }
    if(y>=1250){
        document.getElementById('sec1-bot-wrap').style = "transform: translate3d(0px, -91.1%, 0px);";
    }
    if(y>=1350){
        document.getElementById('sec1-bot-wrap').style = "transform: translate3d(0px, -94.5%, 0px);";
    }
    if(y>=1450){
        document.getElementById('sec1-bot-wrap').style = "transform: translate3d(0px, -95.5%, 0px);";
    }
    if(y>=1452){
        document.getElementById('sec1-wrap').style = "transform: translate(0px, 1163px); inset: 0px auto auto 0px; margin: 0px; width: 100%; height: 969px; padding: 0px;";
        document.getElementById('sec2-wrap').style = "transform: translate(0px, 0px);inset: 0px auto auto 0px; margin: 0px; width: 100%; height: 969px; padding: 0px;";
    }
    if(y>=2376){
        document.getElementById('sec2-wrap').style = "transform: translate(0px, 0px); top: 0px; left: 0px; margin: 0px; width: 100%; height: 969px; padding: 0px; position:fixed; box-sizing: border-box;";
        document.getElementById('sec2-tb').style.opacity = "1";
        document.getElementById('sec2-vl').style.opacity = "0";
    }
    if(y>=2676){
        document.getElementById('sec2-tb').style.opacity = "0.6916";
        document.getElementById('sec2-vl').style.opacity = "0.0605";
    }
    if(y>=2776){
        document.getElementById('sec2-tb').style.opacity = "0.2903";
        document.getElementById('sec2-vl').style.opacity = "0.2903";
    }
    if(y>=2876){
        document.getElementById('sec2-tb').style.opacity = "0.0605";
        document.getElementById('sec2-vl').style.opacity = "0.6916";
    }
    if(y>=2976){
        document.getElementById('sec2-tb').style.opacity = "0";
        document.getElementById('sec2-vl').style.opacity = "1";
    }
    if(y>=3050){
        document.getElementById('sec2-wrap').style = "transform: translate(0px, 683px);inset: 0px auto auto 0px; margin: 0px; width: 100%; height: 969px; padding: 0px;";
    }
    if(y>=4000){
        if(anim_close != 1){
            document.getElementById('top-phone').style = "transform: translate(549.841px, -258.884px);";
            document.getElementById('bot-phone').style = "transform: translate(-549.841px, 258.884px);";
        }
    }
    if(y>=4100){
        if(anim_close != 1){
            document.getElementById('top-phone').style = "transform: translate(213.163px, -100.365px);";
            document.getElementById('bot-phone').style = "transform: translate(-213.163px, 100.365px);";
        }
    }
    if(y>=4200){
        if(anim_close != 1){
            document.getElementById('top-phone').style = "transform: translate(33.0805px, -15.5755px);";
            document.getElementById('bot-phone').style = "transform: translate(-33.0805px, 15.5755px);";
        }
    }
    if(y>=4300){
        if(anim_close != 1){
            document.getElementById('top-phone').style = "transform: translate(0px, 0px);";
            document.getElementById('bot-phone').style = "transform: translate(0px, 0px);";
            anim_close = 1;
        }
        document.getElementById('sec4-wrap').style = "position: relative; transform: translate(0px, 0px); inset: 0px auto auto 0px;"
    }
    if(y>=5934){
        document.getElementById('sec4-wrap').style = "position: fixed; transform: translate(0px, 0px); left:0px; top:-279.484px;"
        document.getElementById('white-img').style.opacity = "1";
    }
    if(y>=6034){
        document.getElementById('white-img').style.opacity = "0.5883";
    }
    if(y>=6134){
        document.getElementById('white-img').style.opacity = "0.167";
    }
    if(y>=6234){
        document.getElementById('white-img').style.opacity = "0.0025";
    }
    if(y>=6334){
        document.getElementById('white-img').style.opacity = "0";
        document.getElementById('sec4-wrap').style = "transform: translate(0px, 279px); inset: 0px auto auto 0px;"
    }
    if(y>=6885){
        document.getElementById('sec5-txt').classList.add("fade-in-bot");
        document.getElementById('sec5-txt2').classList.add("fade-in-bot");
    }
    if(y>=7795){
        document.getElementById('sec6-txt').classList.add("fade-in-bot");
        document.getElementById('sec6-txt2').classList.add("fade-in-bot");
    }
    if(y>=9008){
        document.getElementById('sec7-txt').classList.add("fade-in-bot");
        document.getElementById('sec7-txt2').classList.add("fade-in-bot");
        document.getElementById('sec8-wrap').style = "transform: translate(0px, 0px); inset: 0px auto auto 0px;"
    }
    if(y>=10950){
        document.getElementById('sec8-wrap').style = "position: fixed; transform: translate(0px, 0px); left: 0px; top: -0.078125px;"
        document.getElementById('sec8-tb').style.opacity = "1"
    }
    if(y>=11450){
        document.getElementById('sec8-tb').style.opacity = "0.364"
    }
    if(y>=11550){
        document.getElementById('sec8-tb').style.opacity = "0.0176"
        document.getElementById('sec8-th1').style = "opacity: 0; transform: translate(0px, 150px);"
    }
    if(y>=11650){
        document.getElementById('sec8-tb').style.opacity = "0"
        document.getElementById('sec8-th1').style = "opacity: 0.5819; transform: translate3d(0px, 62.7209px, 0px);"
        document.getElementById('sec8-t1').style = "opacity: 0; transform: translate(0px, 150px);"
        document.getElementById('sec8-th2').style = "opacity: 0; transform: translate(0px, 150px);"
    }
    if(y>=11750){
        document.getElementById('sec8-th1').style = "opacity: 1; transform: translate(0px, 0px);"
        document.getElementById('sec8-t1').style = "opacity: 1; transform: translate(0px, 0px);"
        document.getElementById('sec8-th2').style = "opacity: 0.4175; transform: translate3d(0px, 87.3777px, 0px);"
        document.getElementById('sec8-t2').style = "opacity: 0; transform: translate(0px, 150px);"
        document.getElementById('sec8-th3').style = "opacity: 0; transform: translate(0px, 150px);"
    }
    if(y>=11850){
        document.getElementById('sec8-th2').style = "opacity: 1; transform: translate(0px, 0px);"
        document.getElementById('sec8-t2').style = "opacity: 1; transform: translate(0px, 0px);"
        document.getElementById('sec8-th3').style = "opacity: 0.2259; transform: translate3d(0px, 116.113px, 0px);"
        document.getElementById('sec8-t3').style = "opacity: 0; transform: translate(0px, 150px);"
        document.getElementById('sec8-th4').style = "opacity: 0; transform: translate(0px, 150px);"
    }
    if(y>=11950){
        document.getElementById('sec8-th3').style = "opacity: 1; transform: translate(0px, 0px);"
        document.getElementById('sec8-t3').style = "opacity: 1; transform: translate(0px, 0px);"
        document.getElementById('sec8-th4').style = "opacity: 0.0072; transform: translate3d(0px, 148.926px, 0px);"
        document.getElementById('sec8-t4').style = "opacity: 0; transform: translate(0px, 150px);"
    }
    if(y>=12050){
        document.getElementById('sec8-th4').style = "opacity: 1; transform: translate(0px, 0px);"
        document.getElementById('sec8-t4').style = "opacity: 0.9872; transform: translate3d(0px, 1.9155px, 0px);"
    }
    if(y>=12150){
        document.getElementById('sec8-t4').style = "opacity: 1; transform: translate(0px, 0px);"
        document.getElementById('sec8-wrap').style = "transform: translate(0px, 1115px); inset: 0px auto auto 0px;"
        document.getElementById('sec9-wrap').style = "transform: translate(0px, 0px); inset: 0px auto auto 0px;"
    }
    if(y>=13222){
        document.getElementById('sec9-wrap').style = "position: fixed; transform: translate(0px, 0px); left: 0px; top: -0.078125px;"
        document.getElementById('sec9-tb').style.opacity = "1";
    }
    if(y>=13722){
        document.getElementById('sec9-tb').style.opacity = "0.5952";
    }
    if(y>=13822){
        document.getElementById('sec9-tb').style.opacity = "0.2001";
    }
    if(y>=13922){
        document.getElementById('sec9-tb').style.opacity = "0.0152";
    }
    if(y>=14022){
        document.getElementById('sec9-tb').style.opacity = "0";
    }
    if(y>=14122){
        document.getElementById('sec9-wrap').style = "transform: translate(0px, 900px); inset: 0px auto auto 0px;"
        document.getElementById('sec10-wrap').style = "transform: translate(0px, 0px); inset: 0px auto auto 0px;"
    }
    if(y>=15671){
        document.getElementById('sec10-wrap').style = "position: fixed; transform: translate(0px, 0px); left: 0px; top: -0.078125px;"
        document.getElementById('sec10-tb').style.opacity = "1";
    }
    if(y>=15971){
        document.getElementById('sec10-tb').style.opacity = "0.3521";
    }
    if(y>=16071){
        document.getElementById('sec10-tb').style.opacity = "0.0237";
    }
    if(y>=16171){
        document.getElementById('sec10-tb').style.opacity = "0";
        document.getElementById('sec10-wrap').style = "transform: translate(0px, 500px); inset: 0px auto auto 0px"
    }
}