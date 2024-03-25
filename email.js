function validate()
{
    var mail = document.querySelector('#name').value;

    var mail1 = document.querySelector('#name');
    var mail2 = document.querySelector('#but');
    var mail3 = document.querySelector('#head3');

    var regx = /([a-zA-Z0-9]{3,20})+@+([A-Za-z]{4,15})+\.+([a-zA-Z]{2,15})/; 

    var myinfo = document.querySelector("#info");

    if(regx.test(mail))
    {
        myinfo.innerHTML="<img src=\'check.png\' width=\'30px\'>"+"<h5>"+"Yay!Thank you"+"</h5>"+"<h6 class=\'para1\'>"+"We've sent a confirmation link"+"<br>"+"to your inbox"+"</h6>";
        myinfo.style.color="green";
        myinfo.style.height="90px";
        myinfo.style.width="290px";
        myinfo.style.border="1px solid #067973";
        myinfo.style.background="#f5fffe";
        myinfo.style.padding="10px";
        mail1.style.display="none";
        mail2.style.display="none";
        mail3.style.display="none";
        myinfo.style.position="relative";
        myinfo.style.top="-30px";

        
    }
    else
    {
        
        myinfo.innerHTML="<img src=\'danger.png\' width=\'30px\'>"+"<h4>"+"Please use a valid email"+"</h4>"+"<br>"+"<p class=\'para\'>"+"Like:person@inbox.com"+"</p>";
        myinfo.style.color="#b71540";
        myinfo.style.padding="10px";
        myinfo.style.marginTop="30px";
        myinfo.style.fontSize="18px";
        myinfo.style.background="#fdeff3";
        myinfo.style.height="60px";
        myinfo.style.width="290px";
        myinfo.style.border="1px solid #b71540";

    }
}