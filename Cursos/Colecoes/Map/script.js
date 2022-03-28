function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Leonardo', 'Admin');
usuarios.set('Adriano', 'Admin');
usuarios.set('Matheus', 'User');
usuarios.set('Pedro', 'Admin');
usuarios.set('Alinson', 'User');

console.log(getAdmins(usuarios));