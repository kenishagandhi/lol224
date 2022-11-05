gojoarray=[];

function submit()
{
    var name1= document.getElementById("student1").value;
    var name2= document.getElementById("student2").value;
    var name3= document.getElementById("student3").value;
    var name4= document.getElementById("student4").value;

    gojoarray.push(name1);
    gojoarray.push(name2);
    gojoarray.push(name3);
    gojoarray.push(name4);

    console.log(gojoarray);
    document.getElementById("displayname").innerHTML=gojoarray;
    document.getElementById("submiting").style.display="none";
    document.getElementById("sort").style.display="inline-block"


}

function sorting()
{
    gojoarray.sort();
    console.log(gojoarray);
    document.getElementById("displayname").innerHTML=gojoarray;
}
