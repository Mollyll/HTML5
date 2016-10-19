/**
 * Created by Administrator on 2016/10/12.
 */
function Student(name,gender,age,address) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.address = address;
}
var dbUtil = {};
(function (dbName,storeName,dbUtil) {
    //创建数据库
    var request = window.indexedDB.open(dbName,"2");
    request.onupgradeneeded = function (event) {
        //创建对象仓库
        var db = event.target.result;
        if(db.objectStoreNames.contains(storeName)){
            db.deleteObjectStore(storeName);
        }
        var store = db.createObjectStore(storeName,{
            keyPath:"id",
            autoIncrement:true
        });
    };
    function getStore(storeName,handler){
        var request = window.indexedDB.open(dbName,"2");
        request.onsuccess = function (event) {
            var db = event.target.result;
            var transaction = db.transaction(storeName,"readwrite");
            var store = transaction.objectStore(storeName);
            handler(store);
        }
    }
    dbUtil.saveStudent = function(student,handler){
        getStore(storeName,function (store) {
            var request = store.put(student);
            request.onsuccess = function (event) {
                handler(event);
            }
        });
    };
    dbUtil.findAllStudent = function (handler) {
        getStore(storeName,function (store) {
            var request = store.getAll();
            request.onsuccess = function (event) {
                handler(event);
            }
        })
    };
    dbUtil.deleteStudent = function (id,handler) {
        getStore(storeName,function (store) {
            var request = store.delete(id);
            request.onsuccess = function () {
                alert("删除成功！");
                handler(this.result);
            };
            request.onerror = function (event) {
                handler(event);
            };
        })
    };
    dbUtil.getStudent = function (id,handler) {
        getStore(storeName,function (store) {
            var request = store.get(id);
            request.onsuccess = function () {
                handler(this.result);
            }
        })
    };
})("sms","Students",dbUtil);