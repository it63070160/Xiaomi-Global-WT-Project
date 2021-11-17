let count = 0;
function close_covid(){
    document.getElementById('covid').style.height = "0";
}
function collapse(){
    document.getElementById('nav-wrapper').classList.remove("expand");
    document.getElementById('line').style.height = "0";
}
function expand(num){
    document.getElementById('nav-wrapper').classList.add("expand");
    document.getElementById('line').style.height = "250px";
    let requestURL = 'nav_bar.json'; 
    let request = new XMLHttpRequest(); 
    request.onreadystatechange = function () { 
        if (request.readyState == 4 && request.status == 200) {             
            dataReportStatus(JSON.parse(request.responseText));            
        } }; 
    request.open("GET", requestURL, true); 
    request.send();

    function dataReportStatus(data) {
        if(count>0){
            for(let i=0;i<count;i++){
                document.getElementById("nav-item_list-group").removeChild(document.getElementById('nav-item_list'));
            }
            count = 0;
        }
        if(num==1){
            for (let i=0;i<data.phone.length; i++){
                document.getElementById("nav-item_list-group").innerHTML += "<li class='nav-item_list' id='nav-item_list'><a class='nav-item_list-img' href='"+data.phone[i].href+"'><img src='"+data.phone[i].src+"' alt='"+data.phone[i].product+"'></a><a class='nav-item_list-title'>"+data.phone[i].product+"</a><span class='nav-item_list-price'></span></li>";
                count++;
            }
        }
        else if(num==2){
            for (let i=0;i<data.pocophone.length; i++){
                document.getElementById("nav-item_list-group").innerHTML += "<li class='nav-item_list' id='nav-item_list'><a class='nav-item_list-img' href='"+data.pocophone[i].href+"'><img src='"+data.pocophone[i].src+"' alt='"+data.pocophone[i].product+"'></a><a class='nav-item_list-title'>"+data.pocophone[i].product+"</a><span class='nav-item_list-price'></span></li>";
                count++;
            }
        }
        else if(num==3){
            for (let i=0;i<data.redmiphones.length; i++){
                document.getElementById("nav-item_list-group").innerHTML += "<li class='nav-item_list' id='nav-item_list'><a class='nav-item_list-img' href='"+data.redmiphones[i].href+"'><img src='"+data.redmiphones[i].src+"' alt='"+data.redmiphones[i].product+"'></a><a class='nav-item_list-title'>"+data.redmiphones[i].product+"</a><span class='nav-item_list-price'></span></li>";
                count++;
            }
        }
        else if(num==4){
            for (let i=0;i<data.mitv.length; i++){
                document.getElementById("nav-item_list-group").innerHTML += "<li class='nav-item_list' id='nav-item_list'><a class='nav-item_list-img' href='"+data.mitv[i].href+"'><img src='"+data.mitv[i].src+"' alt='"+data.mitv[i].product+"'></a><a class='nav-item_list-title'>"+data.mitv[i].product+"</a><span class='nav-item_list-price'></span></li>";
                count++;
            }
        }
        else if(num==5){
            for (let i=0;i<data.smartdevices.length; i++){
                document.getElementById("nav-item_list-group").innerHTML += "<li class='nav-item_list' id='nav-item_list'><a class='nav-item_list-img' href='"+data.smartdevices[i].href+"'><img src='"+data.smartdevices[i].src+"' alt='"+data.smartdevices[i].product+"'></a><a class='nav-item_list-title'>"+data.smartdevices[i].product+"</a><span class='nav-item_list-price'></span></li>";
                count++;
            }
        }
    }
}