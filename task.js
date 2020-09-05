//Calculator Operations
function add()
{
    var v1=Number(document.getElementById("value1").value);
    var v2=Number(document.getElementById("value2").value);
    var res=v1+v2;
    document.getElementById("res").value=res;
    return res;
}
function subtract()
{
    var v1=Number(document.getElementById("value1").value);
    var v2=Number(document.getElementById("value2").value);
    var res=v1-v2;
    document.getElementById("res").value=res;
    return res;
}
function multiply()
{
    var v1=Number(document.getElementById("value1").value);
    var v2=Number(document.getElementById("value2").value);
    var res=v1*v2;
    document.getElementById("res").value=res;
    return res;
}
function divide()
{
    var v1=Number(document.getElementById("value1").value);
    var v2=Number(document.getElementById("value2").value);
    var res=v1/v2;
    document.getElementById("res").value=res;
    return res;
}
function percentage()
{
    var v1=Number(document.getElementById("value1").value);
    var v2=Number(document.getElementById("value2").value);
    var res=(v1/100)*v2;
    document.getElementById("res").value=res;
    return res;
}
function absolute()
{
    var v1=Number(document.getElementById("value1").value);
    var res=Math.abs(v1);
    document.getElementById("res").value=res;
    return res;

}
function squareRoot()
{
    var v1=Number(document.getElementById("value1").value);
    var res=Math.sqrt(v1);
    document.getElementById("res").value=res;
    return res;
}

//Form-Validation
function terms_changed(termsCheckBox)
{
    if(termsCheckBox.checked)
    {
        document.getElementById("submit").disabled=false;
    }
    else{
        document.getElementById("submit").disabled=true;
    }
}
/*function validation()
{
   
      validName();
      validNo();
      validEmail();
      if(validNo==true && validName==true && validEmail==true)
      {
         
          return true;
      }
     else
      return false;
   
     
}*/
function validName(){
   
   var name=document.getElementById("name").value;
    var phone_reg= /^\\d{10}$/
     var name_reg= /^[A-Za-z]+([\ A-Za-z]+)*/;
    if(!name_reg.test(name))

    {
        document.getElementById("validity").innerHTML= "* Only Characters are accepted *"
        return false;
    }
    else 
     {
        document.getElementById("validity").innerHTML= "";
        return true;
        
     }
}
function validNo()
{
    var phone=document.getElementById("phone").value;
    var phone_reg= /^[0-9]{10}$/;
    if(!phone_reg.test(phone))

    {
        document.getElementById("phoneno").innerHTML= "* Invalid phone no. *"
        return false;
    }
    else 
     {
        document.getElementById("phoneno").innerHTML= "";
        return true;
        
     }

}
function validEmail()
{
    var email=document.getElementById("e-mail").value;
    var email_reg = /\S+@\S+\.\S+/;
    if(!email_reg.test(email))

    {
        document.getElementById("email").innerHTML= "* Invalid emailID. *"
        return false;
    }
    else 
     {
        document.getElementById("email").innerHTML= "";
        return true;
        
     }
}
function success()
{
    if(validEmail==true && validName==true && validNo==true)
    alert("Submitted successfully");
}


//Palindrome and anagram
function clearAll()
{
    //document.getElementById("palin").value="";
    console.log("kfd");
    document.getElementById("yes").innerHTML="";
    document.getElementById("no").innerHTML="";
}
function palindrome()
{
    var str1=document.getElementById("palin").value;
    str=str1.toLowerCase().replace(/\s/g,'');
    //var arr=str.split("");
    if(str=="")
    {
        alert("Invalid!!");

    }
    else{
    var rev="";
    for(var i=str.length-1;i>=0;i--)
    {
       rev+=str.charAt(i);
    }
    if(rev==str)
    {
        
       alert(str1 + " is a palindrome");
        return true;
    }
    else
     {
        alert(str1 + " is not a palindrome!");
        return false;
     }
    }
    

}
function anagram()
{
    var str1=document.getElementById("anagram").value;
    var str2=document.getElementById("second").value;
    if(str1=="" || str2=="")
    {
        alert("Invalid!!");
    }
    else{
    var s1=str1.replace(/\s/g,'');
    var s2=str2.replace(/\s/g,'');
    if(s1.length!=s2.length)
     alert("Invalid");
     else{
    console.log(s1);
    var status=true;
    
        var arr1=s1.toLowerCase().split("");
        var arr2=s2.toLowerCase().split("");
        arr1.sort();
        arr2.sort();
        for(var i=0;i<arr1.length;i++)
        if(arr1[i]!=arr2[i])
        {
         status= false;
         break;
        }
        else
         status= true;
    
    if(status)
    {
        alert(str1+ " and " +str2+" are anagrams");
        return true;
    }
    else
    {
        alert(str1+ " and " +str2+" are not anagrams");
        return false;
    }
}
    }
}
function random1(){
    var p = Math.floor(Math.random() * (1000 - 1));
    document.getElementById("value1").value = p;
    return p;
}

function random2(){
    var q = Math.floor(Math.random() * (1000 - 1));
    document.getElementById("value2").value = q;
    return q;
}
function survivor(x,y){

    var map = new Map();

    map.set(0,'Human');
    map.set(1,'Cockroach');
    map.set(2,'Nuclear Bomb');

    a = x % 3;
    b = y % 3;

    if (a == b){
        document.getElementById("vs").innerHTML = map.get(0)+" Vs "+map.get(0);
        document.getElementById("res").value = "Tie";
        return "Survivor : Tie";
    }
    else if (a == 0 && b == 1) {
        document.getElementById("vs").innerHTML = map.get(0)+" Vs "+map.get(1);
        document.getElementById("res").value = "Human";
        return "Survivor : Human";
    }
    else if (a == 0 && b == 2) {
        document.getElementById("vs").innerHTML = map.get(0)+" Vs "+map.get(2);
        document.getElementById("res").value = "Nuclear Bomb";
        return "Survivor : Nuclear Bomb";
    }
    else if (a == 1 && b == 0) {
        document.getElementById("vs").innerHTML = map.get(1)+" Vs "+map.get(0);
        document.getElementById("res").value = "Human";
        return "Survivor : Human";
    }
   
    else if (a == 1 && b == 2) {
        document.getElementById("vs").innerHTML = map.get(1)+" Vs "+map.get(2);
        document.getElementById("res").value = "Human";
        return "Survivor : Human";
    }
    else if (a == 2 && b == 0) {
        document.getElementById("vs").innerHTML = map.get(2)+" Vs "+map.get(0);
        document.getElementById("res").value = "Nuclear Bomb";
        return "Survivor : Nuclear Bomb";
    }
    else if (a == 2 && b == 1) {
        document.getElementById("vs").innerHTML = map.get(2)+" Vs "+map.get(1);
        document.getElementById("res").value = "Nuclear Bomb";
        return "Survivor : Nuclear Bomb";
    }
    
}
