function Calculate_area()
{
    var len = Number(document.getElementById("Length").value);
    var wid = Number(document.getElementById("Width").value);
    document.getElementById("calculation").innerHTML = `Area is ${len * wid} sq. mtr<br> Parameter is ${2 *(len + wid)} mtr`;
}