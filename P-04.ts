interface User {
    name: string;
    ci: string;
    email: string;
};

function createUser( name: string, ci: string, email: string): User {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const user = createUser( 'Camila', '12345678', 'camila13@gmail.com' );

console.log(user);