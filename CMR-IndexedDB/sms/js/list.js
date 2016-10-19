/**
 * Created by Administrator on 2016/10/12.
 */
function load() {
    dbUtil.findAllStudent(function (event) {
        $(".tb1 tbody").children(":not(:first)").remove();
        //console.log(result);
        var rows = event.target.result;
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
    load();
    $("button").eq(2).off("click");
    $("button").eq(2).on("click",function () {
        $(".tb1 :checkbox:checked").each(function (index,item) {
            var id = +$(item).val();
            dbUtil.deleteStudent(id,function () {
                load();
            })
        });
    });
    $("button").eq(1).off("click");
    $("button").eq(1).on("click",function () {
        var result = $(".tb1 :checkbox:checked");
        if(result.length==1){
            result.each(function (index,item) {
                var id = $(item).val();
                localStorage.removeItem("id");
                localStorage.setItem("id",id);

            });
        }else{
            alert("一次只能修改一个学生的信息");
        }
    });
    $("button").eq(2).off("click");
    $("button").eq(2).on("click",function () {
        var result = $(".tb1 :checkbox:checked");
        result.each(function (index,item) {
            var id = +$(item).val();
            //console.log(typeof id);
            dbUtil.deleteStudent(id,function (result) {
                console.log(result);
            });
            load();
        });
    });
});