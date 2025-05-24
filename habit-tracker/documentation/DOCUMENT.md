=====================
PROFESSIONAL BACKEND/API CHECKLIST (Node + Express + SQL)
=====================
1. Project Structure
   - Use folders: /controllers, /models, /routes, /middleware, /db
   - Separate logic: controllers (business), models (DB), routes (endpoints)

2. Database Design (SQL)
   - Tables: users (optional), habits (id, user_id, name, streak, last_completed, completed_today, status)
   - Use proper types, constraints, and foreign keys
   - Plan for soft deletes (status column)

3. API Endpoints (RESTful)
   - GET /api/habits         // get all habits
   - POST /api/habits        // add new habit
   - PUT /api/habits/:id     // update habit
   - DELETE /api/habits/:id  // delete/soft-delete habit
   - GET /api/habits/completed
   - GET /api/habits/deleted
   - (Optional) POST /api/habits/:id/complete

4. Database Connection
   - Use a connection pool (mysql2, pg, or ORM)
   - Store DB credentials in .env, use dotenv
   - Handle connection errors

5. Controllers & Models
   - Controllers: request/response, validation, error handling
   - Models: SQL queries or ORM logic
   - Keep controllers thin

6. Middleware
   - express.json(), CORS, error handling, (optional) auth

7. Validation & Error Handling
   - Validate incoming data
   - Use proper HTTP status codes
   - Send clear error messages

8. Testing
   - Test endpoints with Postman/Insomnia
   - Write unit/integration tests

9. Security
   - Sanitize inputs, use parameterized queries/ORM
   - (Optional) Auth for user-specific data

10. Documentation
    - Document API (README, Swagger, or Postman)
    - Add code comments

11. Frontend Integration
    - Use fetch/axios for API calls
    - Handle loading, error, and success states
    - Remove direct array manipulation in frontend

12. Deployment
    - Use env variables, prepare npm scripts
    - (Optional) Deploy to Heroku/Render/Railway
    - Use production DB

Pro Tips:
- Think in resources (table/model = resource)
- Keep code modular
- Always handle errors
- Use async/await
- Learn SQL basics
- Use Git/version control
- Start simple, iterate, ask why

You’re ready to build a professional backend and connect it to your frontend!
=====================
*/


