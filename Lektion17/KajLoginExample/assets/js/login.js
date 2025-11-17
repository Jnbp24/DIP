const username = document.querySelector('#username')
const password = document.querySelector('#password')
const login = document.querySelector('#login')

login.onclick = async () => {
    try {
        const data = await post("/login", { username: username.value, password: password.value });
        if (data.ok == true) {
            window.location.href = "/secret"
        }
    } catch (e) {
        password.value = "";
        fejl.innerHTML = "Forkert password eller intet navn!";
    }
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    })
    if (respons.status !== 201)
        throw new Error(respons.status)
    return await respons.json()
}