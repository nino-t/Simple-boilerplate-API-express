## Simple boilerplate API express
<br>

##### How to run boilerplate:

1. npm install
2. npm i -g sequelize-cli (if you have not installed sequelize-cli)
3. create your database
4. config your database env in file "/config/database.json"
5. run command "npm run db:migrate"
6. run command "npm run db:seed"
7. and you can run "npm run start" to bundle backend & run server
8. you can access at this address http://localhost:3000
9. i'm recommended to use postman tool to check how API work to handle JWT.

##### Address available:

- GET http://localhost:3000/api/todos (queries = token) 
- POST http://localhost:3000/auth/login (body = email, password, token)

##### npm command:

| Command                     | Real Command                     | Function                                                |
| --------------------------- | -------------------------------- | ------------------------------------------------------- |
| npm run start               | webpack && node server.bundle.js | run server with bundle backend server                   |
| npm run db:migrate          | sequelize db:migrate             | run migration file                                      |
| npm run db:migrate:status   | sequelize db:migrate:status      | run migration status                                    |
| npm run db:migrate:undo     | sequelize db:migrate:undo        | run migration rollback from lasted                      |
| npm run db:migrate:undo:all | sequelize db:migrate:undo:all    | run migration rollback to all migration file            |
| npm run db:seed             | sequelize db:seed:all            | run seeder and seeded to datababase                     |
| npm run db:seed:undo        | sequelize db:seed:undo           | run seeder rollback and rollback seeded from datababase |

<br>

## MIT Licensed
&copy; Trisno Nino
<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
<br>
<br>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
<br>
<br>
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.