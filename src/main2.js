function convert()
{
    var Min_or_houres = document.querySelector('input[name = converstion]:checked').value;
    var num = Number(document.getElementById("get_number").value);
    if(Min_or_houres == "Hours")
    {
        document.getElementById("convert_display").innerHTML = `${num} houres = ${num * 60} Minutes`
    }
    else
    {
        document.getElementById("convert_display").innerHTML = `${num} minutes = ${num * 60} Seconds`
    }
}