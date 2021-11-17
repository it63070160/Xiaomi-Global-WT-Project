let anim_play = 0;
window.onscroll = function(){
    y = window.pageYOffset;
    console.log(y);
    if(y>=100){
        if(document.getElementById('sec1_text').style.opacity != "1"){
            document.getElementById('sec1_text').classList.add("fade-in-bot");
        }
    }
    if(y>=500){
        document.getElementById('sec1_text').classList.remove("fade-in-bot");
    }
    if(y<1350){
        document.getElementById('sec2').style = "transform: translate3d(0px, 0px, 0px); inset: 0px auto auto 0px; margin: 0px; width: 100%; max-height: 817.688px; padding: 0px";
    }
    if(y>=1350){
        document.getElementById('sec2').style = "left: 0px; top: 145.812px; position: fixed; box-sizing: border-box"
        document.getElementById('sec2_img1').style.opacity = "1";
        document.getElementById('sec2_img2').style.opacity = "0";
    }
    if(y>=1450){
        document.getElementById('sec2_img1').style.opacity = "0.4463";
        document.getElementById('sec2_img2').style.opacity = "0";
    }
    if(y>=1550){
        document.getElementById('sec2_img1').style.opacity = "0";
        document.getElementById('sec2_img2').style.opacity = "0";
    }
    if(y>=1650){
        document.getElementById('sec2_img1').style.opacity = "0";
        document.getElementById('sec2_img2').style.opacity = "0.9682";
        document.getElementById('v-box').style = "display: block; top: 941px";
    }
    if(y>=1750){
        document.getElementById('sec2_img1').style.opacity = "0";
        document.getElementById('sec2_img2').style.opacity = "1";
        document.getElementById('v-box').style = "display: block; top: 0px";
    }
    if(y>=2150){
        document.getElementById('v-box').style = "display: block; top: -2.4827%";
    }
    if(y>=2250){
        document.getElementById('v-box').style = "display: block; top: -5%";
        document.getElementById('sec2').style = "left: 0px; top: 145.812px; position: fixed; box-sizing: border-box"
    }
    if(y>=2300){
        document.getElementById('sec2').style = "transform: translate(0px, 964px); inset: 0px auto auto 0px; position: static";
        document.getElementById('sec3').style = "transform: translate(0px, 0px); inset: 0px auto auto 0px";
    }
    if(y>=3160){
        document.getElementById('sec3').style = "top: 96.8125px; left: 0px; padding: 193.273px 0px 0px; box-sizing: border-box; position: fixed;";
        document.getElementById('sec3_txt').style.opacity = "0.911";
    }
    if(y>=3260){
        document.getElementById('sec3_txt').style.opacity = "0.5859";
    }
    if(y>=3360){
        document.getElementById('sec3_txt').style.opacity = "0.3323";
    }
    if(y>=3460){
        document.getElementById('sec3_txt').style.opacity = "0.1501";
    }
    if(y>=3560){
        document.getElementById('sec3_txt').style.opacity = "0.0394";
    }
    if(y>=3660){
        document.getElementById('sec3_txt').style.opacity = "0.0001";
    }
    if(y>=3760){
        document.getElementById('sec3_txt').style.opacity = "0";
        document.getElementById('sec3').style = "transform: translate(0px, 582px); inset: 0px auto auto 0px";
        document.getElementById('sec5').style = "transform: translate(0px, 0px); inset: 0px auto auto 0px; margin: 0px; max-width: 100%; max-height: 969px; padding: 0px"
    }
    if(y>=3800){
        if(document.getElementById('sec4_text').style.opacity != "1"){
            document.getElementById('sec4_text').classList.add("fade-in-bot");
            document.getElementById('sec4_text').style.opacity = "1";
        }
    }
    if(y>=3900){
        document.getElementById('sec4_text').classList.remove("fade-in-bot");
    }
    if(y>=5300){
        document.getElementById('v-box4').style.opacity = "0.8367";
    }
    if(y>=5400){
        document.getElementById('v-box4').style.opacity = "0.378";
    }
    if(y>=5500){
        document.getElementById('v-box4').style.opacity = "0.0992";
    }
    if(y>=5600){
        document.getElementById('v-box4').style.opacity = "0.0002";
    }
    if(y>=5560){
        document.getElementById('v-box4').style.opacity = "0";
        document.getElementById('sec5').style = "left: 0px; top: 90.9062px; box-sizing: border-box; position: fixed;"
        document.getElementById('sec5-pin1').style = "opacity: 1; display: block;"
    }
    if(y>=5660){
        document.getElementById('sec5-pin1').style = "opacity: 0.6882; display: block;"
    }
    if(y>=5760){
        document.getElementById('sec5-pin1').style = "opacity: 0.185; display: block;"
    }
    if(y>=5860){
        document.getElementById('sec5-pin1').style = "opacity: 0.0009; display: block;"
    }
    if(y>=5960){
        document.getElementById('sec5-pin1').style = "opacity: 0; display: none;"
        document.getElementById('sec5-pin2').style = "display: none;"
    }
    if(y>=6200){
        document.getElementById('sec5-pin2').style = "display: block;"
        document.getElementById('sec5-mask').style = "left: 0px;"
    }
    if(y>=6400){
        document.getElementById('sec5-mask').style = "left: -23.667%;"
    }
    if(y>=6600){
        document.getElementById('sec5-mask').style = "left: -47.7863%;"
    }
    if(y>=6800){
        document.getElementById('sec5-mask').style = "left: -70.1326%;"
    }
    if(y>=6900){
        document.getElementById('sec5-mask').style = "left: -90.7059%;"
    }
    if(y>=7000){
        document.getElementById('sec5-mask').style = "left: -109.506%;"
    }
    if(y>=7100){
        document.getElementById('sec5-mask').style = "left: -126.533%;"
    }
    if(y>=7200){
        document.getElementById('sec5-mask').style = "left: -141.787%;"
    }
    if(y>=7300){
        document.getElementById('sec5-mask').style = "left: -155.268%;"
    }
    if(y>=7400){
        document.getElementById('sec5-mask').style = "left: -166.976%;"
    }
    if(y>=7500){
        document.getElementById('sec5-mask').style = "left: -176.911%;"
    }
    if(y>=7600){
        document.getElementById('sec5-mask').style = "left: -185.073%;"
    }
    if(y>=7700){
        document.getElementById('sec5-mask').style = "left: -191.462%;"
    }
    if(y>=7800){
        document.getElementById('sec5-mask').style = "left: -196.078%;"
    }
    if(y>=7900){
        document.getElementById('sec5-mask').style = "left: -198.921%;"
    }
    if(y>=8000){
        document.getElementById('sec5-mask').style = "left: -199.99%;"
    }
    if(y>=8100){
        document.getElementById('sec5-mask').style = "left: -200%;"
        document.getElementById('sec5_img2').style = "transform: scale(1.9, 1.9);"
        document.getElementById('sec5-pin3').style = "opacity: 0;"
    }
    if(y>=8200){
        document.getElementById('sec5-pin2').style = "display: none;"
        document.getElementById('sec5-pin3').style = "opacity: 0.954;"
    }
    if(y>=8300){
        document.getElementById('sec5-pin3').style = "opacity: 1;"
        document.getElementById('sec5_img2').style = "transform: translate3d(0px, 0px, 0px) scale(1.0106, 1.0106);"
    }
    if(y>=8400){
        document.getElementById('sec5_img2').style = "transform: translate(0px, 0px)"
        document.getElementById('sec5_text').style = "opacity: 0; transform: translate(0px, 30px);"
    }
    if(y>=8500){
        document.getElementById('sec5_text').style = "opacity: 0.9879; transform: translate3d(0px, 0.362px, 0px)"
    }
    if(y>=8580){
        document.getElementById('sec5_text').style = "opacity: 1; transform: translate(0px, 0px)"
        document.getElementById('sec5').style = "transform: translate(0px, 3004px); inset: 0px auto auto 0px; margin: 0px; max-width: 100%; max-height: 969px; padding: 0px"
    }
    if(y>=9300){
        if(document.getElementById('sec6_text-left').style.opacity != "1"){
            document.getElementById('sec6_text-left').classList.add("fade-in-bot");
        }
    }
    if(y>=9700){
        if(document.getElementById('sec7_text').style.opacity != "1"){
            document.getElementById('sec7_text').classList.add("fade-in-bot");
            document.getElementById('sec7_list').classList.add("fade-in-bot");
        }
    }
    if(y>=11650){
        if(document.getElementById('sec9_text').style.opacity != "1"){
            document.getElementById('sec9_text').classList.add("fade-in-bot");
        }
        document.getElementById('sec10_text').style.opacity = "1"
    }
    if(y>=13000){
        document.getElementById('sec10_text').style.opacity = "0.7885"
    }
    if(y>=13100){
        document.getElementById('sec10_text').style.opacity = "0.5217"
    }
    if(y>=13200){
        document.getElementById('sec10_text').style.opacity = "0.3098"
    }
    if(y>=13300){
        document.getElementById('sec10_text').style.opacity = "0.1529"
    }
    if(y>=13400){
        document.getElementById('sec10_text').style.opacity = "0.0508"
        if(document.getElementById('sec11_text').style.opacity != "1"){
            document.getElementById('sec11_text').classList.add("fade-in-bot");
        }
    }
    if(y>=13500){
        document.getElementById('sec10_text').style.opacity = "0.0036"
    }
    if(y>=13600){
        document.getElementById('sec10_text').style.opacity = "0"
        document.getElementById('sec13_text').style.opacity = "1"
    }
    if(y>=14500){
        document.getElementById('sec12_box1').classList.add('fade-in-bot');
        document.getElementById('sec12_box2').classList.add('fade-in-bot');
        document.getElementById('sec13_text').style.opacity = "1"
    }
    if(y>=15500){
        document.getElementById('sec13_text').style.opacity = "0.7885"
    }
    if(y>=15600){
        document.getElementById('sec13_text').style.opacity = "0.5217"
    }
    if(y>=15700){
        document.getElementById('sec13_text').style.opacity = "0.3098"
    }
    if(y>=15800){
        document.getElementById('sec13_text').style.opacity = "0.1529"
    }
    if(y>=15850){
        document.getElementById('sec13_text').style.opacity = "0.0508"
        if(document.getElementById('sec14_text').style.opacity != "1"){
            document.getElementById('sec14_text').classList.add("fade-in-bot");
        }
    }
    if(y>=16000){
        document.getElementById('sec10_text').style.opacity = "0.0036"
    }
    if(y>=16100){
        document.getElementById('sec10_text').style.opacity = "0"
    }
    if(y>=16900){
        document.getElementById('sec15_text').classList.add('fade-in-bot');
        document.getElementById('sec15_list').classList.add('fade-in-bot');
    }
    if(y>=17500){
        document.getElementById('sec16_1_text').classList.add('fade-in-bot');
        document.getElementById('sec16_2_text').classList.add('fade-in-bot');
        document.getElementById('sec16_item').classList.add('fade-in-bot');
        document.getElementById('sec16_item2').classList.add('fade-in-bot');
    }
    if(y>=18700){
        document.getElementById('sec17_text').classList.add('fade-in-bot');
        document.getElementById('sec18_text').style.opacity = "1"
    }
    if(y>=19900){
        document.getElementById('sec18_text').style.opacity = "0.7885"
    }
    if(y>=20000){
        document.getElementById('sec18_text').style.opacity = "0.5217"
    }
    if(y>=20100){
        document.getElementById('sec18_text').style.opacity = "0.3098"
    }
    if(y>=20200){
        document.getElementById('sec18_text').style.opacity = "0.1529"
    }
    if(y>=20300){
        document.getElementById('sec18_text').style.opacity = "0.0508"
        if(document.getElementById('sec19_text').style.opacity != "1"){
            document.getElementById('sec19_text').classList.add("fade-in-bot");
        }
    }
    if(y>=20400){
        document.getElementById('sec10_text').style.opacity = "0.0036"
    }
    if(y>=20500){
        document.getElementById('sec10_text').style.opacity = "0"
    }
    if(y>=21100){
        document.getElementById('sec20_text').classList.add('fade-in-bot');
    }
    if(y>=22200){
        document.getElementById('sec21_text').classList.add('fade-in-bot');
    }
    if(y>=23500){
        document.getElementById('sec22_text').classList.add('fade-in-bot');
    }
    if(y>=24500){
        document.getElementById('sec23_text').classList.add('fade-in-bot');
    }
    if(y>=25500){
        document.getElementById('sec24_text').classList.add('fade-in-bot');
    }
}

let x = 0;
let plus_x = 0;
let slide2_count = 0;
let pause = 0;
slide2();
function slide2(){
    if(x<=(-5709)){
        x = 0;
    }
    plus_x = x - 1903;
    if(pause==1){
        document.getElementById('sl-track').style = "width: 9515px; opacity: 1; transform: translate3d("+plus_x+"px, 0px, 0px)"
        pause=0;
    }
    else{
        document.getElementById('sl-track').style = "width: 9515px; opacity: 1; transform: translate3d("+plus_x+"px, 0px, 0px); transition: -webkit-transform 500ms ease 0s"
        if(slide2_count==0){
            document.getElementById('dot1').classList.add("slick-active");
            document.getElementById('dot2').classList.remove("slick-active");
        }
        else if(slide2_count==1){
            document.getElementById('dot1').classList.remove("slick-active");
            document.getElementById('dot2').classList.add("slick-active");
        }
        else if(slide2_count==2){
            document.getElementById('dot1').classList.add("slick-active");
            document.getElementById('dot2').classList.remove("slick-active");
        }
    }
    slide2_count++;
    x = plus_x
    setTimeout(function(){
        if(slide2_count>=3){
            slide2_count=0;
            pause = 1;
        }
    }, 3000);
    setTimeout(slide2, 2000);
}

let slide3_count = 1;
slide3();
function slide3(){
    if(slide3_count>=4){
        slide3_count=1;
    }
    if(slide3_count==1){
        document.getElementById('dot2_1').classList.add("slick-active");
        document.getElementById('dot2_2').classList.remove("slick-active");
        document.getElementById('dot2_3').classList.remove("slick-active");
    }
    if(slide3_count==2){
        document.getElementById('dot2_1').classList.remove("slick-active");
        document.getElementById('dot2_2').classList.add("slick-active");
        document.getElementById('dot2_3').classList.remove("slick-active");
    }
    if(slide3_count==3){
        document.getElementById('dot2_1').classList.remove("slick-active");
        document.getElementById('dot2_2').classList.remove("slick-active");
        document.getElementById('dot2_3').classList.add("slick-active");
    }
    document.getElementById('slide'+slide3_count).style.opacity = "1";
    setTimeout(function(){
        document.getElementById('slide'+slide3_count).style.opacity = "0";
        slide3_count++;
    }, 6000)
    setTimeout(slide3, 6000);
}

let slide4_count = 1;
slide4();
function slide4(){
    if(slide4_count>=4){
        slide4_count=1;
    }
    if(slide4_count==1){
        document.getElementById('dot3_1').classList.add("slick-active");
        document.getElementById('dot3_2').classList.remove("slick-active");
        document.getElementById('dot3_3').classList.remove("slick-active");
        document.getElementById('item3_1').style.opacity = "1";
        document.getElementById('item3_2').style.opacity = "0";
        document.getElementById('item3_3').style.opacity = "0";
    }
    if(slide4_count==2){
        document.getElementById('dot3_1').classList.remove("slick-active");
        document.getElementById('dot3_2').classList.add("slick-active");
        document.getElementById('dot3_3').classList.remove("slick-active");
        document.getElementById('item3_1').style.opacity = "0";
        document.getElementById('item3_2').style.opacity = "1";
        document.getElementById('item3_3').style.opacity = "0";
    }
    if(slide4_count==3){
        document.getElementById('dot3_1').classList.remove("slick-active");
        document.getElementById('dot3_2').classList.remove("slick-active");
        document.getElementById('dot3_3').classList.add("slick-active");
        document.getElementById('item3_1').style.opacity = "0";
        document.getElementById('item3_2').style.opacity = "0";
        document.getElementById('item3_3').style.opacity = "1";
    }
    document.getElementById('slide'+slide4_count+'_2').style.opacity = "1";
    setTimeout(function(){
        document.getElementById('slide'+slide4_count+'_2').style.opacity = "0";
        slide4_count++;
    }, 6000)
    setTimeout(slide4, 6000);
}