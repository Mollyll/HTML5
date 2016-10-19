/**
 * Created by Administrator on 2016/10/13.
 */
$(function () {
    var id = window.location.search.substr(1);
    query(id,function (result) {
        var rows = result.rows;
        for(var i = 0; i < rows.length; i++){
            var student = rows[i];
            $("[name='name1']").val(student.name);
            $("[name='gender']").val(student.gender);
            $("[name='age1']").val(student.age);
            $("[name='address1']").val(student.address);
        }
    });
    $("#updForm1").off("submit");
    $("#updForm1").on("submit",function () {
        var name = $(this).find("[name='name1']").val();
        var gender = $(this).find("[name='gender1']").val();
        var age = $(this).find("[name='age1']").val();
        var address = $(this).find("[name='address1']").val();
        var student = new Student(id,name,gender,age,address);
        //调用更新数据函数
        updata(student,function (result) {
            console.log(result);
        });
        //删除原来的数据
        /*drop(id,function (result) {
            console.log(result);
        });
        var student = new Student(id,name,gender,age,address);
        //保存修改后的数据
        save(student,function(){
            alert("修改成功");
            $("#updForm1")[0].reset();
        });*/
    });
});