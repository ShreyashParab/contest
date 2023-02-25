function validate() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cnfPassword = document.getElementById('cnfPassword').value

    let error = false
    
    if(name.length > 1)
    {
        document.getElementById('name-valid').style.display = 'block'
        document.getElementById('name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('name-valid').style.display = 'none'
        document.getElementById('name-invalid').style.display = 'block'
        error = true
    }

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

    if(cnfPassword.length >= 8 && cnfPassword == password)
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
        let teacher = {
            'name':name,
            'email':email,
            'password':password,
            // 'cnfPassword':cnfPassword
        }

        let teachers = []
        teachers = JSON.parse(localStorage.getItem('users')) || []
        teachers.push(teacher)
        localStorage.setItem('users',JSON.stringify(teachers))
    
        document.getElementById('name').value =''
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        document.getElementById('cnfPassword').value = ''

        document.getElementById('name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('password-valid').style.display = 'none'
        document.getElementById('cnfPassword-valid').style.display = 'none'

        location.replace("/login.html")
        
    }

    
}