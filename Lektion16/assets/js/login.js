const username = document.querySelector('#username')
const password = document.querySelector('#password')
const login  = document.querySelector('#login')
const error = document.querySelector('#error')

login.onclick = async () => {
    try{
        const data = await post('/login', {username: username.value, password: password.value})
        window.alert(`Valid login for user ${data.username}`)
    }catch(e) {
        password.value = "";
        error.innerHTML = 'Incorrect password'
    }
} 

async function post(url, object){
    const response = await fetch(url,{
        method: "POST",
        body: JSON.stringify(object),
        headers: {'Content-Type': 'application/json'}
    })
    return await response.json()
}