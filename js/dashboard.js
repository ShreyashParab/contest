function dashboard()
{
    let oldPassword = document.getElementById('oldPassword').value
    let newPassword = document.getElementById('newPassword').value
    let cnfPassword = document.getElementById('cnfPassword').value

    let error = false

    if(oldPassword.length >= 8)
    {
        document.getElementById('oldPassword-valid').style.display = 'block'
        document.getElementById('oldPassword-invalid').style.display = 'none'
    }
    else{
        document.getElementById('oldPassword-valid').style.display = 'none'
        document.getElementById('oldPassword-invalid').style.display = 'block'
        error = true
    }

    if(newPassword.length >= 8)
    {
        document.getElementById('newPassword-valid').style.display = 'block'
        document.getElementById('newPassword-invalid').style.display = 'none'
    }
    else{
        document.getElementById('newPassword-valid').style.display = 'none'
        document.getElementById('newPassword-invalid').style.display = 'block'
        error = true
    }

    if(cnfPassword.length >= 8)
    {
        document.getElementById('cnfPassword-valid').style.display = 'block'
        document.getElementById('cnfPassword-invalid').style.display = 'none'
    }
    else{
        document.getElementById('cnfPassword-valid').style.display = 'none'
        document.getElementById('cnfPassword-invalid').style.display = 'block'
        error = true
    }

    if(error == false)
    {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (!currentUser) {
            window.location.href = 'login.html';
        }

        if (oldPassword !== currentUser.password) {
            alert('Incorrect old password!');
            return;
        }
    
        if (newPassword !== cnfPassword) {
            alert('New passwords do not match!');
            return;
        }
    
        currentUser.password = newPassword;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
        alert('Password changed successfully!');

        document.getElementById('oldPassword').value = ''
        document.getElementById('newPassword').value = ''
        document.getElementById('cnfPassword').value = ''

        document.getElementById('oldPassword-valid').style.display = 'none'
        document.getElementById('newPassword-valid').style.display = 'none'
        document.getElementById('cnfPassword-valid').style.display = 'none'
    }
}

function logout(){
    localStorage.removeItem('currentUser');
	window.location.href = 'login.html';
}