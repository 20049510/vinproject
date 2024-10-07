function sum(a,b,n)
    {
        s=0;
        for(i=1;i<n;i++)
        {
            if(i%a==0 || i%b==0)
                s+=i;
        }
        alert("Sum = "+s);
        document.getElementById("result").innerHTML=s;
    }

function GetValues()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    limit = document.getElementById("limit").value;
    document.getElementById("num1").style.display="none";
    document.getElementById("num2").style.display="none";
    document.getElementById("limit").style.display="none";
    document.getElementById("sum").style.display="none";
    document.getElementById("label1").style.display="none";
    document.getElementById("label2").style.display="none";
    document.getElementById("label3").style.display="none";
    sum(num1,num2,limit);
    
}


function Show()
{
    document.getElementById("num1").style.display="block";
    document.getElementById("num2").style.display="block";
    document.getElementById("limit").style.display="block";
    document.getElementById("sum").style.display="block";
    document.getElementById("label1").style.display="block";
    document.getElementById("label2").style.display="block";
    document.getElementById("label3").style.display="block";
   
   
    l=[10,12,14,156,28];
    m=3;
    v=5;
    sum1(l,m,v);

    k=[6,3];
    j=[2,5,6,12,15];
    sum2(k,j)
}

function slice()
{
    text = document.getElementById("slice1").value;
    start = document.getElementById("start").value;
    end = document.getElementById("end").value;
    result = text.slice(start,end);
    alert("Result = "+result);
}



function sum1(l,a,b)
{
    s=0;
    for(i=0;i<l.length;i++)
    {
        if(l[i]%a==0 || l[i]%b==0)
            s+=l[i];
    }
    alert("Sum = "+s);
}

function sum2(k,j)
{
    s=0;
    for(i=0;i<k.length;i++)
    {
        for(h=0;h<j.length;h++)
        {
            if(j[h]%k[i]==0 || j[h]%k[i]==0)
                s+=j[h];
        }
    }
    alert("Sum = "+s);
}