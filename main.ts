// List of current usernames
const current_users: string[] = ["John", "Ayesha", "aira", "manal", "tehami"];

// List of new usernames
const new_users: string[] = ["john", "anaya", "fatma", "merab", "azal"];

// Loop through new_users to check availability
for (const new_user of new_users) {
    const usernameTaken = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (usernameTaken) {
        console.log(`Username "${new_user}" is already taken. Please choose a different username.`);
    } else {
        console.log(`Username "${new_user}" is available.`);
    }
}


