var a;
function clickbtn()
{
    if(a==1)
    {

    document.getElementById('div2').style.opacity="1";
    document.getElementById('div1').style.opacity="0";
    return a=0;
    }
    else
    {
        document.getElementById('div1').style.opacity="1";
        document.getElementById('div2').style.display="0";
        return a=1;

    }
    
   
    
}
function clickbtn1()
{
    document.getElementById('div1').style.opacity=1;
    document.getElementById('div2').style.display="none";


}
