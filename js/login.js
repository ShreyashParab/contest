function login(){
    let users = JSON.parse(localStorage.getItem('users'))
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let error = false

    if(email && email.includes('@') && email.includes('.') && email.slice(email.lastIndexOf('.')+1).length >= 2 && email.charAt(0)!='@' && email[email.indexOf('.')+1]!='.' && (email.includes('gmail') || email.includes('email') || email.includes('mail') || email.includes('yahoo') || email.includes('hotmail')))
    {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('email-invalid').style.display = 'block'
        error = true
    }

    if(password.length >= 8)
    {
        document.getElementById('password-valid').style.display = 'block'
        document.getElementById('password-invalid').style.display = 'none'
    }
    else{
        document.getElementById('password-valid').style.display = 'none'
        document.getElementById('password-invalid').style.display = 'block'
        error = true
    }

    if(error == false)
    {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser) {
            window.location.href = 'dashboard.html';
        }

        let user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            alert('Invalid email or password!');
            return;
        }

        const token = Math.random().toString(36).slice(2, 18);

        localStorage.setItem('currentUser', JSON.stringify({ ...user, token }));

        window.location.href = 'dashboard.html';

        
    }


}