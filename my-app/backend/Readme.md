# Homestay Review Analyzer Backend

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file and add:

```env
PORT=5000
```

## Run the Server

```bash
npm run dev
```

## Server URL

```
http://localhost:5000
```

## API Endpoints

- GET `/api/reviews`
- GET `/api/reviews/:id`
- POST `/api/reviews`
- PUT `/api/reviews/:id`
- DELETE `/api/reviews/:id`
- GET `/api/reviews/search?q=keyword`

## API Testing

All API endpoints were tested using **Postman**. The collection includes requests for:

- Get all reviews
- Get review by ID
- Create a review
- Update a review
- Delete a review
- Search reviews

Import the exported Postman collection to test the APIs locally.