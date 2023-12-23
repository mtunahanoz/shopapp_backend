let user_id = generateRandomString(11);
let username, email;
let pet = [];



let user = {
    name: username,
    email: email,
    user_id: user_id,
    pet: pet,

};


function generateRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}