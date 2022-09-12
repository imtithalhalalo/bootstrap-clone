const form = document.getElementById('form')
const fullname = document.getElementById('name')
const email = document.getElementById('email')
email_input = email
const phone_num = document.getElementById('phone_num')
const message = document.getElementById('message')
const error = document.getElementById('error')


form.addEventListener('submit', e => {
    let messages = []
    if(fullname.value === '' || fullname.value == null) {
        messages.push("Name Required")
    }else if(fullname.value.length < 5){
        messages.push("Name should be more than 5 characters")
    }
    // validation email
    if(email.value === '' || email.value == null) {
        messages.push("Email Required")
    }
    validateEmail(messages)

    // validation phone number
    if(phone_num.value === '' || phone_num.value == null) {
        messages.push("Phone Number Required")
    }

    if(message.value === '' || message.value == null) {
        messages.push("Message Required")
    }else if(message.value.length < 100){
        messages.push("Message should be minimum 100 characters")
    }
    if(messages.length > 0){
        e.preventDefault()
        error.innerText = messages.join(', ')
        error.classList.add('error')
    }
})



