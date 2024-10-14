[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/pzYEIbPq)
## Assignment: Build a Simple REST API Microservice

### Objective:
The goal of this assignment is to help you understand how a RESTful API works on the server-side using Node.js and Express. You will implement a microservice that allows users to be created, retrieved, updated, and deleted. The user data will be stored in memory (no database required).

### Summary Steps for Students:

1. **Fork the Repository**:
   - After accepting the assignment via GitHub Classroom, you'll receive a forked copy of the repository.
   - Clone your forked repository to your local machine:
     ```bash
     git clone https://github.com/your-username/assignment-repository.git
     ```

2. **Create a Branch**:
   - Before you make any changes, create a new branch to work on. This allows you to submit a pull request later.
     ```bash
     git checkout -b my-feature-branch
     ```

3. **Make Changes**:
   - Implement the API endpoints as described in the assignment instructions.
   - Run the server and make sure everything works locally.

4. **Test Your Code**:
   - Run the tests to ensure everything is working correctly:
     ```bash
     npm test
     ```

5. **Push Your Changes**:
   - Once you’ve made the necessary changes and tested your code, stage, commit, and push your changes to your new branch:
     ```bash
     git add .
     git commit -m "Implemented API endpoints"
     git push origin my-feature-branch
     ```

6. **Submit a Pull Request (PR)**:
   - After pushing your changes to the new branch, go to GitHub and create a **pull request** comparing your `my-feature-branch` with the `main` branch of your forked repository.
   - Merge the pull request.
   - This allows the teacher to review your code and GitHub Actions to run the tests automatically.
---
### Full Instructions:

### 1. **Fork the Repository:**
   - Go to the URL here to get started: https://classroom.github.com/a/c1gHGTav.
   - Accept the assignment (click the Accept Assignment button).
   - Clone the forked repository to your local development environment:
     ```bash
     git clone https://github.com/your-username/your-repository-name.git
     ```
     
### 2. **Create a Branch**:
   - Before you make any changes, create a new branch to work on. This allows you to submit a pull request later.
     ```bash
     git checkout -b my-feature-branch
     ```

### 3. **Install Dependencies:**
   - Navigate into the project directory and install the necessary dependencies:
     ```bash
     cd your-repository-name
     npm install
     ```

### 4. **Run the Server:**
   - The project uses **Express.js** for handling HTTP requests.
   - To start the server locally, run the following command:
     ```bash
     npm start
     ```
   - The server will be running on `http://localhost:3000`. You can test the API by sending requests using a tool like **Postman** or **curl**.

### 5. **Implement the API Endpoints:**

You will implement the following API endpoints in `src/index.js`:

a. **POST /users**: Create a new user.
   - The request body should contain the user’s name and email.
   - Example request body:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```
   - Response: The created user with a unique `id`.

b. **GET /users/:id**: Retrieve user information by their `id`.
   - The user’s `id` will be passed as a URL parameter.
   - Response: The user details (id, name, email).

c. **PUT /users/:id**: Update user information by their `id`.
   - The request body should contain the new `name` and `email` for the user.
   - Example request body:
     ```json
     {
       "name": "Jane Doe",
       "email": "jane@example.com"
     }
     ```
   - Response: The updated user details.

d. **DELETE /users/:id**: Delete a user by their `id`.
   - Response: 204 No Content.

**Important**. Only change the code in index.js where indicated by the comments. Also, do not change the user.test.js file or the test.yml file. You are, however, free to add files and folders as necessary to complete the assignment.

### 6. **In-Memory Storage:**
   - For this assignment, store user data in memory using an array. Each user will have a unique `id`, `name`, and `email`.

### 7. **Testing Your Code:**
   - Test your API using **curl**, **Postman**, or any HTTP client of your choice.
   - Example test cases to run:
     - Create a new user using a POST request.
     - Retrieve the user by their ID using a GET request.
     - Update the user's information using a PUT request.
     - Delete the user using a DELETE request.

### 8. **Run Automated Tests:**
   - The repository includes automated tests using **Jest** and **Supertest**.
   - You can run the tests by executing:
     ```bash
     npm test
     ```
   - Ensure that all tests pass before submitting your code.

### 9. **Submit Your Work:**
   - Once you’ve implemented all the endpoints and verified that your tests pass, push your changes to your GitHub repository:
     ```bash
     git add .
     git commit -m "Completed REST API microservice"
     git push origin main
     ```
   - Create a pull request that compares your branch to the main branch.
   - Merge the pull request. Merging the Pull Request submits your assignment.


### Additional Notes:
- Make sure your API follows RESTful principles (correct HTTP methods and status codes).
- Each endpoint should handle errors properly (e.g., return a `404` when the user is not found).
- Follow good coding practices, including appropriate variable names, code structure, and comments where necessary.

### Good luck!
