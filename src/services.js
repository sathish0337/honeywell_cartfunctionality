export default function authenticateUser(username, password) {

    return new Promise((resolve, reject) => {
        if (username === "test" && password === "test") {
            resolve({ authToken: true })
        } else {
            reject({ authToken: false })
        }
    })
}