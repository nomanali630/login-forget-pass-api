function signup() {
    
    axios({
        method: 'post',
        url: 'http://localhost:3000/signup',
        // url: 'https://forgetpasswordserver.herokuapp.com/signup',
        data: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('phone').value,
            gender: document.getElementById('gender').value,
            
        }
    })
    .then((response) => {
        if (response.data.status === 200) {
            alert(response.data.message)
            location.href = "./login.html"
        } else {
            alert(response.data.message);
        }
    }).catch((error) => {
        console.log(error);
    });
    return false;
}
function login() {
    axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        // url: 'https://forgetpasswordserver.herokuapp.com/login',
        withCredentials: true,
        data: {

            email: document.getElementById('Lemail').value,
            password: document.getElementById('Lpass').value,

        }
    }).then((response) => {
        console.log(response);
        alert(response.data.message)
        // location.href = "./profile.html"
    }, (error) => {
        console.log(error);
    });
    return false;
}
function getProfile() {
    axios({
        method: 'get',
        url: 'http://localhost:3000/profile',
        credentials: 'include',
    }).then((response) => {
        console.log(response);
        document.getElementById('pName').innerHTML = response.data.profile.name
        document.getElementById('pPhone').innerHTML = response.data.profile.phone
        document.getElementById('pEmail').innerHTML = response.data.profile.email
    }, (error) => {
        console.log(error.message);
        location.href = "./login.html"
    });
    return false
}
function logout() {
    axios({
        method: 'post',
        url: 'http://localhost:3000/logout',
    }).then((response) => {
        console.log(response);
        location.href = "./login.html"
    }, (error) => {
        console.log(error);
    });
    return false
}
function forget_password() {
    axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        // url: 'https://forgetpasswordserver.herokuapp.com/login',
        withCredentials: true,
        data: {

            email: document.getElementById('email12').value,
           

        }
    }).then((response) => {
        console.log(response);
        alert(response.data.message)
        // location.href = "./profile.html"
    }, (error) => {
        console.log(error);
    });
    return false;
}
function forget_password() {
    axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        // url: 'https://forgetpasswordserver.herokuapp.com/login',
        withCredentials: true,
        data: {

            email: document.getElementById('code').value,
            email: document.getElementById('newpass').value,
           }
    }).then((response) => {
        console.log(response);
        alert(response.data.message)
        // location.href = "./profile.html"
    }, (error) => {
        console.log(error);
    });
    return false;
}