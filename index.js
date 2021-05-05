function switchButton (){
    var checkBox = document.getElementById("annually/monthly");
    var monthly_arr = document.getElementsByClassName("monthly");
    var annually_arr = document.getElementsByClassName("annually");

    if(checkBox.checked) {
        for (var i = 0; i < monthly_arr.length; i++) {
            monthly_arr[i].style.display = "block";
            annually_arr[i].style.display = "none";
        }
    }

    else {
        for (var i = 0; i < annually_arr.length; i++) {
            monthly_arr[i].style.display = "none";
            annually_arr[i].style.display = "block";
        }
    }
}