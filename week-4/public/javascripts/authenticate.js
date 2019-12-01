function authenticate(action, data, message_box) {
    return fetch(action, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({email: data.email.value, password: data.password.value})
        })
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            }
        })
        .then((content) => {
            if (content.success) {
                location.href = location.origin + content.location + '?email=' + data.email.value;
            } else {
                document.getElementById(message_box).textContent = content.reason;
            }
        })
}

function signUp(data){
    return authenticate('signUp', data, "sign_up_error_message");
}

function signIn(data){
    return authenticate('signIn', data, "sign_in_error_message");
}