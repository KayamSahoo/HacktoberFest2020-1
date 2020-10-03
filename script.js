alert("Heayallo");
var f=["Undefined"];
d=1;i=-1;
while(d==1)
{
    var c=prompt("what would you like to do?\n1.New\n2.List\n3.delete\n4.Quit");
    if (c=="new")
    {
            f[i+1]=prompt("enter a new to do");           
        i=i+1;        
    }
    else if (c=="list") 
    {
        for(var j=0;j<f.length;j++)
         alert(f[j]);            
    }            
    else if (c=="delete") 
    {
        var g=prompt("enter the todo you want to remove");
        for(var i=0;i<f.length;i++)
        {
            if(f[i]==g)
            {
             f[i]=null;
                if (i!=(f.length-1)) 
                {
                    for(var k=i;k<f.length-1;k++)
                    f[k]=f[k+1];
                }
            }        
        }
        f.length=f.length-1;
    }  
    else if(c=="quit")
    {
         d=23;
    }
    else
    alert("error");    
}

