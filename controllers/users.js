import { v4 as uuidev4 } from "uuid";

let users = []

//Geting User
export const getUsers = (req, res) => {
    res.send(users);
}

// Creating a user
export const createUser = (req, res) => {
    const user = req.body
    users.push({ ...user, id: uuidev4()});
    res.send(`User with the name ${user.firstName} added to the data base!`)
}

// Posting a User
export const getUser = (req,res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id );
    res.send(foundUser)
}

//Deleting a speciefic user
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with ${id} deleted from the database.`);
}

//Editing a users speciefic info
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`User with the ${id} has been updated.`)
}
