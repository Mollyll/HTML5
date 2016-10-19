/**
 * Created by Administrator on 2016/10/12.
 * 这是添加页面的js
 */
$(function () {
    $("#addForm").off("submit");
    $("#addForm").on("submit",function(){
        var id = $(this).find("[name='id']").val();
        var name = $(this).find("[name='name']").val();
        var gender = $(this).find("[name='gender']").val();
        var age = $(this).find("[name='age']").val();
        var address = $(this).find("[name='address']").val();
        var student = new Student(id,name,gender,age,address);
        save(student,function(){
            alert("保存成功");
            $("#addForm")[0].reset();
        })
    });
});