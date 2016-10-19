/**
 * Created by Administrator on 2016/10/12.
 */

$(function () {
    var id = +localStorage.getItem("id");
    //console.log(typeof id);
    dbUtil.getStudent(id, function (result) {
        $("[name='name1']").val(result.name);
        $("[name='gender1']").val(result.gender);
        $("[name='age1']").val(result.age);
        $("[name='address1']").val(result.address);
    });
    $("#updForm").off("submit");
    $("#updForm").on("submit",function () {
        var name = $(this).find("[name='name1']").val();
        var gender = $(this).find("[name='gender1']").val();
        var age = $(this).find("[name='age1']").val();
        var address = $(this).find("[name='address1']").val();
        var student = new Student(name,gender,age,address);
        dbUtil.deleteStudent(id,function () {
            console.log("删除原有数据");
        });
        dbUtil.saveStudent(student,function () {
            console.log("更新新数据");
            $("#updForm").get(0).reset();
        });
    });
});
