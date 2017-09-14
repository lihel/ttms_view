/**
 * Created by lmy on 17-9-9.
 */

let user = "root", password = "123456";

let checkUser = ()=> {
    let userName = document.getElementById('user').value;
    let passwordValue = document.getElementById('password').value;
    if (userName === user && passwordValue === password) {
        alert('登陆成功！');
        self.location='studio.html'; //重定向
    }
    else {
        alert('登陆失败！请检查用户名和密码');
        self.location='signIn.html';
    }
}

