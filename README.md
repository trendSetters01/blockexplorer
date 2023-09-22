# Block Explorer Server

This server acts as a middleware between the Block Explorer frontend and the indexer API. It provides endpoints to fetch data about blocks, transactions, and accounts.

## Getting Started

### Prerequisites

- Node.js (Recommended version 14 or above)
- npm (usually comes bundled with Node.js)

### Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:

```bash
cd [your-project-directory]
```

3. Install the required dependencies:

```bash
npm install
```

### Running the Server

Start the server with:

```bash
npm start
```

By default, the server runs on port 3000. You can access it at `http://localhost:3000`.

## API Endpoints

- **Get All Accounts**: `GET /accounts`
- **Get Single Account by ID**: `GET /account/:id`
- [Add more endpoints here]

## Dependencies

- **Express.js**: Web server framework.
- **Axios**: Promise-based HTTP client for making requests.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)