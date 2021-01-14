$(document).ready(function () {
    $("#time9 .textfield").val(localStorage.getItem("time9"))
    $("#time10.textfield").val(localStorage.getItem("time10"))
    $("#time11 .textfield").val(localStorage.getItem("time11"))
    $("#time12 .textfield").val(localStorage.getItem("time12"))
    $("#time1 .textfield").val(localStorage.getItem("time1"))
    $("#time2 .textfield").val(localStorage.getItem("time2"))
    $("#time3 .textfield").val(localStorage.getItem("time3"))
    $("#time4 .textfield").val(localStorage.getItem("time4"))
    $("#time5 .textfield").val(localStorage.getItem("time5"))

    function timeCheck() {
        var currentHour = moment().hour()

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1])
            console.log( timeBlock, currentHour)

            if (timeBlock < currentHour) {
                $(this).addClass("past")
                $(this).removeClass("future")
                $(this).removeClass("present")
            }
            else if (timeBlock === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present")
                $(this).removeClass("future")
            }
            else {
                $(this).removeClass("present")
                $(this).removeClass("past")
                $(this).addClass("future")
            }
        })
    }
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".textfield").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, text)
    })

    timeCheck()
})