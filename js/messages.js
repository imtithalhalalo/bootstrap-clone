//messages container
let messages = document.getElementById('messages')
let all_messages = []
console.log(messages)
//fetch from db messages
console.log('Hello')
fetch(`http://localhost/bootstrap-clone/all_messages.php`).then((response) => response.json())
    .then((data) => {
        data.forEach(message => {
            all_messages.push(message['message'])
            messages.innerText = all_messages.join('\n\n\n')
        });
    })