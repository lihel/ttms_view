/**
 * Created by lmy on 17-9-9.
 */
let user = 'root', password = '123456';
let userName = document.getElementsByClassName('user').value;
let passwordValue = document.getElementsByClassName('password').value;
let checkUser = ()=> {
    if (userName === user && passwordValue === password) {
        alert('sign success!');
    }
    else {
        alert('sign fail!');
    }
}