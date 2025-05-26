# 📁 Backend Project Structure & Guide (Node + Express + SQL/Mongo)

This guide will help you understand **where to put your files**, what each folder is for, and give you tips for building a professional backend.  
**Refer to this whenever you get stuck!**

---

## 🗂️ Recommended Folder Structure


---

## 📄 Breakdown of Each Folder & File

### **server.js**
- **What:** The main file that starts your Express app.
- **What goes here:**  
  - `require('express')`, `require('dotenv')`
  - Set up Express, connect to DB, use routes, start the server.
- **Tip:** Keep this file simple! Just setup and `app.listen`.

---

### **/routes**
- **What:** Defines your API endpoints (URLs).
- **What goes here:**  
  - Each file (e.g., `habits.js`) uses `express.Router()` to define endpoints like `/api/habits`.
  - Example:
    ```js
    // routes/habits.js
    const express = require('express');
    const router = express.Router();
    const habitsController = require('../controllers/habitsController');
    router.get('/', habitsController.getAllHabits);
    router.post('/', habitsController.createHabit);
    module.exports = router;
    ```
- **Tip:** Each resource (habits, users, etc.) gets its own route file.

---

### **/controllers**
- **What:** Functions that handle the logic for each route.
- **What goes here:**  
  - Each function matches a route and does the work (gets data, validates, sends response).
  - Example:
    ```js
    // controllers/habitsController.js
    const Habit = require('../models/habitModel');
    exports.getAllHabits = async (req, res) => { /* ... */ }
    exports.createHabit = async (req, res) => { /* ... */ }
    ```
- **Tip:** Controllers should be "thin"—do logic, call models, send response.

---

### **/models**
- **What:** Handles all database interaction.
- **What goes here:**  
  - For SQL: Functions that run queries (using `mysql2`, `pg`, etc.).
  - For MongoDB: Mongoose schemas and models.
  - Example:
    ```js
    // models/habitModel.js
    const db = require('../db');
    exports.getAll = () => db.query('SELECT * FROM habits');
    exports.create = (name) => db.query('INSERT INTO habits (name) VALUES (?)', [name]);
    ```
- **Tip:** Models should only talk to the database, not handle HTTP requests.

---

### **/middleware**
- **What:** Functions that run before your controllers.
- **What goes here:**  
  - Authentication (check if user is logged in)
  - Error handling (catch errors and send a response)
  - Logging, CORS, etc.
  - Example:
    ```js
    // middleware/auth.js
    module.exports = (req, res, next) => { /* ... */ }
    ```
- **Tip:** Middleware is reusable logic for many routes.

---

### **/db**
- **What:** Handles connecting to your database.
- **What goes here:**  
  - Connection pool for SQL (`mysql2`, `pg`, etc.)
  - Mongoose connection for MongoDB
  - Example:
    ```js
    // db/index.js
    const mysql = require('mysql2');
    const pool = mysql.createPool({ /* ... */ });
    module.exports = pool.promise();
    ```
- **Tip:** Only connect once, then use this connection everywhere.

---

### **/documentation**
- **What:** Markdown files, API docs, progress notes, etc.
- **What goes here:**  
  - Any docs you want to keep for yourself or your team.

---

### **.env**
- **What:** Stores secrets and config (DB credentials, API keys).
- **Tip:** **Never commit this file to GitHub!**  
  Example:

  
---

## ⭐️ **Beginner Tips**

- **Start simple:** You can always combine folders/files if you’re just starting out.
- **Think of each folder as a “role”:**
- *Routes* = “What URL?”
- *Controllers* = “What should happen?”
- *Models* = “How do I talk to the DB?”
- **Use Postman or Insomnia** to test your API endpoints.
- **Use comments** in your code to remind yourself what each part does.
- **Use version control (Git)** and commit often.
- **Don’t be afraid to Google!** Everyone does it.

---

## 🟢 **How It All Connects (Example Flow)**

1. **User sends POST request to `/api/habits`**
2. **server.js** receives it and passes to `/routes/habits.js`
3. **habits.js** calls `habitsController.createHabit`
4. **habitsController.js** calls `habitModel.create`
5. **habitModel.js** runs SQL query using the connection from `/db/index.js`
6. **Result goes back up the chain and a response is sent**

---

## 🟣 **You can do this!**
- Use this guide as a reference.
- Build one piece at a time.
- Ask for help or examples whenever you need them.

---

**Happy coding!**