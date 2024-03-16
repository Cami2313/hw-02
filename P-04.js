;
function createUser(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var user = createUser('Camila', '12345678', 'camila13@gmail.com');
console.log(user);
