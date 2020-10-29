// Add your code here
const userIdContatiner = document.querySelector("#user-id-container")

function submitData(name, email) {
    const configObj = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(data => {addToDom(data)})
        .catch(error => {addErrorToDom(error)})
}

function addToDom(data) {
    const idHeading = document.createElement("h1")
    idHeading.textContent = data.id
    userIdContatiner.append(idHeading)
}

function addErrorToDom(error) {
    const idHeading = document.createElement("h1")
    idHeading.textContent = error.message
    userIdContatiner.append(idHeading)
}