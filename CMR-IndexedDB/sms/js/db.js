/**
 * Created by Administrator on 2016/10/12.
 * 这是共同的数据库js
 */
function getDB() {
    var db = window.openDatabase("student","1.0","student manager system",3*1024*1024);
    return db;
}
(function () {
    var db = getDB();
    db.transaction(function (transaction) {
        var sql = "create table tbl_student(id integer,name text,gender text,age integer,address text)";
        transaction.executeSql(sql,[],function (transaction,result) {
            alert("创建成功");
        },function (transaction,error) {

        });
    });
})();
function Student(id,name,gender,age,address){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.address = address;
}
function save(student,handler) {
    if(student instanceof Student){
        var db = getDB();
        db.transaction(function (transaction) {
            var sql = "insert into tbl_student values (?,?,?,?,?)";
            transaction.executeSql(sql,[
                student.id,
                student.name,
                student.gender,
                student.age,
                student.address
            ],function (transaction,result) {
                handler(result);
            });
        });
    }else{
        alert("数据不符合要求");
    }
}
function query(key,handler) {
    var db = getDB();
    db.transaction(function (transaction) {
        var sql = "select * from tbl_student where 1=1";
        if(key){
            sql += " and name=" + key;
        }
        transaction.executeSql(sql,[],function (transaction,result) {
            handler(result);
        })
    });
}