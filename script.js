function compute()
{
    principal = document.getElementById("principal").value;

    // warn if principal 0 or a negative number
    if (principal <=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

    else {
    rate = document.getElementById("rate").value;
    // parseInt turns string into integer
    var years = parseInt(document.getElementById("years").value);
    // works out interest
    interest = principal*years*rate/100;
    // gets todays date
    var today = new Date();
    // gets current year from todays date, and changes into integer
    var year = parseInt(today.getFullYear());
    var future_year = year+years;

    // returns HTML to the result
    document.getElementById("result").innerHTML =
    //<mark> highlights
    "If you deposit: <mark>" + principal + "</mark><br>\
    at an interest rate of: <mark>" + rate + "%</mark><br>\
    You will receive an amount of <mark>" + interest + "</mark><br>\
    in the year: <mark>" + future_year + "</mark><br>";

    }
    
}
        
function slider() {
    //updates slider rate
    document.getElementById("result_slider").innerHTML = document.getElementById("rate").value + "%";
}
