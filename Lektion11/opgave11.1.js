// opgave11.1.js
const userUrl1 = 'https://jsonplaceholder.typicode.com/users';
const userUrl2= 'https://jsonplaceholder.typicode.com/users/11'; // Empty Json - nothing to fetch
const userUrl3 = 'httpz://jsonplaceholder.typicode.com/users'; // Incorrect url path - cannot fetch data

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}


async function printUsers(url) {
    try {
        let users = await get(url)
        users.forEach(element => {
            console.log(element)
        });
    }
    catch (error) {
        console.error('Error fetching users: ', error.message)
    }
}

//printUsers(userUrl1)
// printUsers(userUrl2)
// printUsers(userUrl3)


function NoAsyncGet(url){
    return fetch(url)
        .then(response => {
            if(response.status !== 200){
                throw new Error(response.status);
            }
            return response.json()
        });
}

function NoAsyncPrintUsers(url){
    NoAsyncGet(url)
        .then(users => {
            users.forEach(element => {
                console.log(element)
            });
        })
        .catch(error => {
            console.error('Error fetching users: ', error.message)

        });
}

NoAsyncPrintUsers(userUrl1)
// NoAsyncPrintUsers(userUrl2)
// NoAsyncPrintUsers(userUrl3)