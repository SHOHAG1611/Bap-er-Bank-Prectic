document.getElementById('submit-btn').addEventListener('click', function () {

    // email add to button 

    const emailField = document.getElementById('email-input')
    const userEmail = emailField.value;
    // passward add to button 
    const passwardField = document.getElementById('password-input')
    const userPassword = passwardField.value;
    if (userEmail == 'shohag.com' && userPassword == 'shohag') {
        window.location.href = 'acaund-detail.html';
    }
})

// just oporer jinis tai abar try kore dekhlam
// document.getElementById('submit-btn').addEventListener('click', function () {
//     const emailField = document.getElementById('email-input');
//     const userEmail = emailField.value;
//     const passwardField = document.getElementById('password-input');
//     const userPassword = passwardField.value;
//     if (userEmail == 'shohag.coms' && userPassword == 'shohag') {
//         window.location.href = 'acaund-detail.html';
//     }

// })