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