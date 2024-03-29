$(document).ready(function() {
    $('#register').on('submit', async (evt) => {
        try {
            evt.preventDefault;
            const lastname  =  $('#lastNameRegis').val(),
                  firstname =  $('#firstNameRegis').val(),
                  email     =  $('#emailRegis').val(),
                  password  =  $('#passwordRegis').val(),
                  passwordCheck = $('#validatePassword').val();
            
            validateInput(lastname, 'last name');
            validateInput(firstname, 'first name');
            validateInput(email, 'email');
            validateInput(password, 'password');
            validateInput(passwordCheck, 'password check');

            validatePassword(password, passwordCheck);

            const regisData =  {
                sort_name: lastname + firstname,
                username: email,
                password
            }

            const requestStatus = await $.ajax({
                method: 'GET',
                url: '/api/users/auth/signup',
                data: regisData,
            })
            console.log(requestStatus);

        } catch (error) {
            alert(error);
        }
    });
});

function validateInput(input, inputName) {
    if (input.trim() === '') throw new Error(`Please fill your ${inputName}`);
}

function validatePassword(password, passwordCheck) {
    if (password !== passwordCheck) throw new Error(`Your password seem not the same`);
}
