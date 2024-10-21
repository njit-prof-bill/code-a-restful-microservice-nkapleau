const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// **************************************************************
// Put your implementation here
// If necessary to add imports, please do so in the section above

const users = [] // initilize array to store users

// Handling POST requests
app.post('/users', (req, res) => {
    const {name, email} = req.body;
    const id = users.length + 1;
    const newUser = {id, name, email};
    users.push(newUser);
    res.status(201).json(newUser);
});

// Handling GET requests 
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({message: "User not found"});
    }
});

// Handling PUT Requests
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email
        res.status(200).json(user);
    }
    else {
        res.status(404).json({message: "User not found"});
    }
});

// Handling DELETE Requests
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id)); // Find the index of the user
    if (index !== -1) {
        users.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({message: "User not found"}); // User not found
    }
});

// Do not touch the code below this comment
// **************************************************************

// Start the server (only if not in test mode)
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app; // Export the app for testing