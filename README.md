# Note Keeper API Documentation
Welcome to the Note Keeper API documentation! This API allows you to perform CRUD (Create, Read, Update, Delete) operations on notes. In the request body, the difficulty field should take an integer value representing the difficulty level: 1 for easy, 2 for medium, and 3 for hard.

## Base URL
The base URL for accessing the Note Keeper API is:
```https
https://note-keeper-api-6yg7.onrender.com
```
## Endpoints
## 1. Create a Note
* URL: /createNote
* Method: POST
* Request Body:
 ```https
  {
  "id":1,
   "title":"Flutter",
  "description":"Flutter is Google's UI framework for crafting high-quality native interfaces on iOS, Android, web, and desktop",
  "difficulty": 3,
  "date":"Mar 14,2024"
}
  ```
* Response
  ```https
  {
  "status": "success",
  "message": "note created successfully"
   }
  ```

## 2. Get All Notes
* URL: /getAllNote
* Method: GET
* Response
  ```https
  {
   "status": "success",
   "length": 1,
   "data": [
          {
           "_id": "65f30ccc677a2272ffc89f76",
           "id": 1,
           "title": "Flutter",
           "description": "Flutter is Google's UI framework for crafting high-quality native interfaces on iOS, Android, web, and desktop",
           "difficulty": 3,
           "date": "Mar 14,2024",
           "__v": 0
          }
        ]
  }
  ```
## 3. Get a Note by ID
* URL: /getNote/:id
* Method: GET
* Response
  ```https
  {
     "status": "success",
    "data": {
    "_id": "65f30ccc677a2272ffc89f76",
    "id": 1,
   "title": "Flutter",
   "description": "Flutter is Google's UI framework for crafting high-quality native interfaces on iOS, Android, web, and desktop",
   "difficulty": 3,
   "date": "Mar 14,2024",
   "__v": 0
    }
  }
   ```
## 4. Update a Note
* URL: /updateNote/:id
* Method: PATCH
* Request Body:
  ```https
   {
    "id":1,
    "title":"Notes",
    "description":"my first notes",
    "difficulty": 2,
   "date":"Mar 15,2024"
  }
  ```
* Response
  ```https
  {
  "status": "success",
  "message": "note updated successfully"
  }
  ```
## 5. Delete a Note
* URL: /deleteNote/:id
* Method: DELETE
* Response
  ```https
  {
  "status": "success",
  "message": "note deleted successfully"
  }
  ```

## 6. Create or Update Multiple Notes : allows creating new notes if their IDs don't exist in the database, otherwise updates existing notes. 
Request body includes note objects with id, title, description, date, and difficulty fields.
* URL: /createManyNotes
* Method: POST
* Request Body:
 ```https
  {
  "notes": [
    {
      "title": "flutter",
      "description": "Description for Todo 1",
      "date": "Mar 15,2024",
     "difficulty": 1,
      "id":11
    },
    {
      "title": "Dart",
      "description": "Description for Todo 2",
      "difficulty": 2,
      "date": "Mar 15,2024",
      "id":12
    },
    {
      "title": "Sqlite",
      "description": "Description for Todo 3",
      "difficulty": 3,
      "date": "Mar 15,2024",
      "id":13
    },
    {
      "title": "Mongo DB",
      "description": "Description for Todo 3",
      "difficulty": 2,
      "date": "Mar 15,2024",
      "id":13
    }
  ]
}
  ```
* Response
  ```https
  {
  "status": "success",
  "data": {
    "insertedCount": 0,
    "matchedCount": 1,
    "modifiedCount": 1,
    "deletedCount": 0,
    "upsertedCount": 3,
    "upsertedIds": {
      "0": "65f31163c4995f05c846386c",
      "1": "65f31163c4995f05c846386d",
      "2": "65f31163c4995f05c8463870"
    },
    "insertedIds": {}
   }
   }
  ```
Feel free to customize this documentation based on the specific functionalities and design of your Note Keeper API.
