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
});