const form = document.getElementById('form')
const fullname = document.getElementById('name')
const email = document.getElementById('email')
email_input = email
const phone_num = document.getElementById('phone_num')
const message = document.getElementById('message')
const error = document.getElementById('error')


//display all messages button
let all_message = document.getElementById('all_messages')


//on click all messages button
all_message.addEventListener('click', e => {
    window.location.replace('allmessages.html')
})


//status
let sstatus = document.querySelector(".status")
form.addEventListener('submit', e => {
    let messages = []
    if (fullname.value === '' || fullname.value == null) {
        messages.push("Name Required")
    } else if (fullname.value.length < 5) {
        messages.push("Name should be more than 5 characters")
    }
    // validation email
    if (email.value === '' || email.value == null) {
        messages.push("Email Required")
    }
    validateEmail(messages)

    // validation phone number
    if (phone_num.value === '' || phone_num.value == null) {
        messages.push("Phone Number Required")
    }
    validatePhoneNumber(messages)

    if (message.value === '' || message.value == null) {
        messages.push("Message Required")
    } else if (message.value.length < 100) {
        messages.push("Message should be minimum 100 characters")
    }
    if (messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(' - ')
        error.classList.add('error')
    } else {
        fname_value = fullname.value
        console.log(fname_value)
        email_value = email.value
        phone_value = phone_num.value
        message_value = message.value
        const formData = new FormData();
        formData.append('fullname', fname_value)
        formData.append('email', email_value)
        formData.append('phone', phone_value)
        formData.append('message', message_value)
        fetch(`http://localhost/bootstrap-clone/add_contact.php`, {
            method: 'POST',
            body: formData,
        }).then((response) => response.json())
            .then((data) => {
                sstatus.textContent = 'Success'
            })
    }
})

const validateEmail = (messages) => {
    // validation email
    arr = email_input.value.split('@');
    if (arr[0].length < 3) {
        messages.push("Email before @ should be minimum of 3 characters")
    } else if (arr[1].length < 5) {
        messages.push("Email after @ should be minimum of 5 characters")
    }
}

const validatePhoneNumber = (messages) => {
    // validation phone number
    if (!phone_num.value.startsWith("+961")) {
        messages.push('Phone Number should start with +961')
    }
    if ((/^(\+)961(3|7[160])\d{7|8}$/.test(phone_num.value))) {
        messages.push('Invalid Phone Number')
    }
}


