/**
 * Created by Administrator on 2016/10/12.
 * 这是列表页的js
 */
function load(key) {
    query(key,function (result) {
        //console.log(result);
        var rows = result.rows;
        //console.log(rows);
        for(var i =0; i < rows.length; i++){
            var student = rows[i];
            var newTr = $("tr:hidden").clone().removeClass("d1");
            newTr.find("input").val(student.id);
            newTr.find("td").eq(1).text(student.name);
            newTr.find("td").eq(2).text(student.gender);
            newTr.find("td").eq(3).text(student.age);
            newTr.find("td").eq(4).text(student.address);
            $(".tb1 tbody").append(newTr);
        }
    });
}
$(function () {
    load(null);
    $("#query").off("click");
    $("#query").on("click",function () {
        var key = this.control.value;
        load(key);
    });
    $("button").eq(1).off("click");
    $("button").eq(1).on("click",function () {
        var id = $(".tb1 :checkbox:checked").val();
        window.open("studentUpd.html?"+id,"target=_blank");
    });
    $("button").eq(2).off("click");
    $("button").eq(2).on("click",function () {
        $(".tb1 :checkbox:checked").each(function (index,item) {
            /*var name = $(item).parent().siblings(":eq(0)").text();
            console.log(name);*/
            /*drop1(name,function (result) {
                console.log(result);
            });*/
            var id = $(item).val();
            drop(id,function (result) {
                console.log(result);
            });
            load(null);
            //$(item).parent().parent().remove();
        })
    });
});