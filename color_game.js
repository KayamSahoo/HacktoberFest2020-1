var x=document.querySelector("#diff1");
var y=document.querySelector("#diff2");
var z=document.querySelector("#colorchange");
var w = document.querySelectorAll(".square");
var q = document.querySelectorAll(".square2");
var u = document.querySelector(".hi");
var z1 = document.querySelector(".hello");
var z2 = document.querySelector(".jumbotron");
var z3 = document.querySelector(".goodfornothing");
var x2=document.querySelectorAll(".square1");
function getRandomIntInclusive(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
x.addEventListener("click",function () {
    z.textContent = "NEW COLORS";
    z1.textContent = " ";
    reset(w);
    y.style.background="white";
    y.style.color="steelblue"
    this.style.background ="steelblue";
    this.style.color ="white"; 
    z.addEventListener("click",function () {
        z.textContent="NEW COLORS";
        z1.textContent=" ";
        for(var gh=0;gh<x2.length;gh++)
            x2[gh].style.display="none";
        reset(w);
        easy();
        winn(q);   
      });
});
y.addEventListener("click", function () {
    z.textContent="NEW COLORS";
    z1.textContent = " "; 
    reset(w);
    x.style.background="white";
    x.style.color="steelblue";
    this.style.background = "steelblue";
    this.style.color = "white";
    z.addEventListener("click", function () {     
        z.textContent = "NEW COLORS";
        z1.textContent=" ";
        reset(w);
        hard();
        winn(w); 
         for (var gh1 = 0; gh1 < x2.length; gh1++)
            x2[gh1].style.display = "block";
    });
});
function winn(arr) 
{     
    for(var k=0;k<arr.length;k++)   
    {    arr[k].addEventListener("click",function() {
            if(this.style.background == z3.style.background)
                {
                    var jt = this.style.background;
                    z.textContent="PLAY AGAIN?";
                    z1.textContent = "Correct";
                    result(jt,arr);
                    z1.color = "steelblue";
                }
            else
            {
                this.style.background="#232323";    
                z1.textContent="TRY AGAIN";
                z1.color ="steelblue";
            }            
        });
    }                  
}
function result(num,arr1) 
{
    for(var t=0;t<arr1.length;t++)
    {
        arr1[t].style.background = num;
    }
    z2.style.background = num;
}
function hard() {
    var sol1 = getRandomIntInclusive(0, 255);
    var sol2 = getRandomIntInclusive(0, 255);
    var sol3 = getRandomIntInclusive(0, 255);
    var a = getRandomIntInclusive(0, 5);
    w[a].style.background = "rgb(" + sol1 + "," + sol2 + "," + sol3 + ")";
    u.textContent = "rgb(" + sol1 + "," + sol2 + "," + sol3 + ")";
    z3.style.background = "rgb(" + sol1 + "," + sol2 + "," + sol3 + ")";
    for (var i = 0; i < w.length; i++) 
    {
        if (i != a)
            w[i].style.background = "rgb(" + getRandomIntInclusive(0, 255) + "," + getRandomIntInclusive(0, 255) + "," + getRandomIntInclusive(0, 255) + ")";
    }
}
function easy()
{
    var sol1 = getRandomIntInclusive(0, 255);
    var sol2 = getRandomIntInclusive(0, 255);
    var sol3 = getRandomIntInclusive(0, 255);
    var b = getRandomIntInclusive(0, 2);
    q[b].style.background = "rgb(" + sol1 + "," + sol2 + "," + sol3 +")";
    u.textContent = "rgb(" + sol1 + "," + sol2 + "," + sol3 + ")";
    z3.style.background = "rgb(" + sol1 + "," + sol2 + "," + sol3 + ")";
    for (var j = 0; j < q.length; j++)
    {
        if (j!=b)
            q[j].style.background = "rgb(" + getRandomIntInclusive(0, 255) + "," + getRandomIntInclusive(0, 255) + "," + getRandomIntInclusive(0, 255) + ")";
    }
}
function reset(aray) {
    z2.style.background = "steelblue";
    for(var h=0;h<aray.length;h++)
    {
        aray[h].style.background="#232323";
    }

}
u.style.textTransform="uppercase";