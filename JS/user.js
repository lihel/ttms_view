/**
 * Created by lmy on 17-9-24.
 */

let rowNum = 0;

function userRow(obj) {
    let table = document.getElementById('empTable');
    let length = table.rows.length;

    for(let i = 0;i<length;i++){
        let row = table.rows[i];
        row.setAttribute('class','default');
    }

    if(event.srcElement.tagName == 'TD'){
        let number = 0;
        let curRow = event.srcElement.parentElement;

        if(curRow.rowIndex == 0){
            // curRow.setAttribute('class','warning');
            return 0;
        }
        else{
            curRow.setAttribute('class','info');
            number = curRow.rowIndex ;
            console.log(number);
            num = number;
        }
    }

}
function checkNum() {
    let num = document.getElementById('Num').value;
    let c = /^[a-zA-Z0-9]{6,20}$/;

    if (c.test(num)) {
        return true;
    }
    else alert('请输入正确编号！');
}

function check() {
    let flag = 0;

    let name = document.getElementById('Name').value;
    let sex = document.getElementById('empSex').value;
    let age = document.getElementById('empAge').value;
    let phoneNum = document.getElementById('empphoneNumber').value;
    let email = document.getElementById('empEmail').value;

    let page = /^[0-9]{1,2}$/;
    let psex = /^男|女$/;

    if (page.test(age) && psex.test(sex)) {
        flag = 1;
    }

    if (flag == 1) {
        add(name, sex, age, phoneNum, email);
    }
    else alert('not number');
}
function add(name, sex, age, phoneNum, email) {

    let newRow = document.getElementById('empTable').insertRow();
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(newRow.insertCell());
    }

    arr[0].innerText = name;
    arr[1].innerText = sex;
    arr[2].innerText = age;
    arr[3].innerText = phoneNum;
    arr[4].innerText = email;

}

function editEmp() {

    let lenght = document.getElementById('empTable').rows[rowNum].cells.length;

    let arr = [];
    for (let i = 0; i < lenght; i++) {
        arr[i] = document.getElementById('empTable').rows[rowNum].cells[i].innerHTML;
    }

    $("#userName").val(arr[0]);
    $("#sex").val(arr[1]);
    $("#age").val(arr[2]);
    $('#phoneNumber').val(arr[3]);
    $('#email').val(arr[4]);

}

function del() {
    let row = rowNum;
    if (row == 0)
        return 0;
    else {
        document.getElementById('empTable').deleteRow(row);
    }
}