# Next.js API Learning Project

## Overview
This project is designed to help developers learn how to create and manage API routes in Next.js. It provides well-structured examples demonstrating different API functionalities, including GET and POST requests.

## Features
- Basic API route setup
- Handling GET and POST requests
- JSON response formatting
- Error handling for requests
- Examples with `NextResponse`

## Getting Started
### Prerequisites
Ensure you have Node.js and pnpm or npm installed on your system.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/henriquemtn/next-api.git
   ```
2. Navigate to the project directory:
   ```sh
   cd next-api
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```
4. Start the development server:
   ```sh
   pnpm dev
   ```

## API Endpoints
### GET `/api`
Returns a simple greeting message.
#### Example Response
```json
{
  "message": "Hello, World!"
}
```

### POST `/api/user`
Accepts a JSON object with a `name` field and returns a personalized greeting.
#### Example Request Body
```json
{
  "name": "Henrique"
}
```
#### Example Response
```json
{
  "message": "Hello, Henrique!"
}
```
#### Error Response (if name is missing)
```json
{
  "error": "The 'name' field is required."
}
```

## Documentation
For more details on Next.js API routes, check out the official documentation:
[Next.js API Routes Documentation](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

## License
This project is open-source and available under the MIT License.

---
Happy coding! 🚀

