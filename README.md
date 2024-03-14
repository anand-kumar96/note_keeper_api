# Note Keeper API Documentation
Welcome to the Note Keeper API documentation! This API allows you to perform CRUD (Create, Read, Update, Delete) operations on notes.

## Base URL
The base URL for accessing the Note Keeper API is:
```https
https://note-keeper-api-6yg7.onrender.com
```
## Endpoints
1. Create a Note
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
