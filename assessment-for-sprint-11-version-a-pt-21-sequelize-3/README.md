# Sequelize-3 Assessment

**Note:** To read this in a rendered view, open your VS Code Command Palette
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to add Sequelize onto an existing Express
application. You will be asked to:

* Implement an API endpoint to return all the entries in the `Breads` table
* Implement an API endpoint to create an entry in the `Breads` table

Use the technologies you have used up to this point. They are all listed in
the **package.json** for your convenience.

* Express.js
* Sequelize
* Sequelize CLI
* SQLite3
* DotENV
* nodemon (for development purposes)

Do not add or remove any dependencies already listed in the **package.json**.

You **DO NOT** need to run `npx sequelize-cli init` to initialize Sequelize as
it is already done for you. The **.sequelizerc** file describes the Sequelize
configuration for this application.

## Getting started

Download the starter from the Download link at the bottom of this page.

Run `npm install` to install the dependencies listed in the last section.

Create a **.env** file at root-level of your project and copy the contents of
the **.env.example** file into the newly created **.env** file.

Run the migration and seed files. Take a look at the migration and model files
to familiarize yourself with the data of this application.

## Instructions

Given following API endpoint specifications, add the API endpoints to the
server in **app.js**.

Run `npm test` to make sure you pass all the tests.

Run `npm test` to run the all the test specs at any given time.

### GET /breads

Returns all the entries in the `Breads` table.

Request:

* Method: `GET`
* URL: `/breads`
* Headers: none
* Body: none

Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  [
    {
      "id": 1,
      "name": "Pumpkin Bread",
      "needsRise": false,
      "createdAt": "2022-03-30T21:12:41.303Z",
      "updatedAt": "2022-03-30T21:12:41.303Z"
    },
    {
      "id": 2,
      "name": "Sourdough",
      "needsRise": true,
      "createdAt": "2022-03-30T21:12:41.303Z",
      "updatedAt": "2022-03-30T21:12:41.303Z"
    }
  ]
  ```

### POST /breads

Create an entry in the `Breads` table.

Request:

* Method: `POST`
* URL: `/breads`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "name": "Cornbread",
    "needsRise": false
  }
  ```

Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "id": 3,
    "name": "Cornbread",
    "needsRise": false,
    "createdAt": "2022-03-30T21:15:48.438Z",
    "updatedAt": "2022-03-30T21:15:48.438Z"
  }
  ```

## Resetting Migration and Model Files

Feel free to make edits to the migration and model files. All edits you make to
the migration and model files will be reset when you submit your project. So,
make sure the test specs still pass even after those files are reset.

You can reset your edits to the migration and model files by running the
following command:

```bash
npm run reset-files
```

## Submission

1. Delete the **node_modules** directory from your project
2. Zip your project
3. Submit the zip folder