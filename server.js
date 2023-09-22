const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;
const INDEXER_BASE_URL = 'https://testnet-idx.voi.nodly.io';

app.use(cors());

// 1. Fetch Account Data
// app.get('/accounts', async (req, res) => {
//     try {
//         const response = await axios.get(`${INDEXER_BASE_URL}/v2/accounts`);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch account data.' });
//     }
// });
app.get('/accounts', async (req, res) => {
    const limit = req.query.limit || 10;  // Default to 10 items if not specified
    const offset = req.query.offset || 0; // Start from the beginning if not specified
    
    try {
        const response = await axios.get(`${INDEXER_BASE_URL}/v2/accounts?limit=${limit}&offset=${offset}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch account data.' });
    }
});

// 2. Fetch Specific Account Details
app.get('/accounts/:accountId', async (req, res) => {
    try {
        const response = await axios.get(`${INDEXER_BASE_URL}/v2/accounts/${req.params.accountId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch specific account details.' });
    }
});

// 3. Fetch Local State for an Account's Applications
app.get('/accounts/:accountId/apps-local-state', async (req, res) => {
    try {
        const response = await axios.get(`${INDEXER_BASE_URL}/v2/accounts/${req.params.accountId}/apps-local-state`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch local state for account\'s applications.' });
    }
});

// 4. Retrieve Assets for a Specific Account
app.get('/accounts/:accountId/assets', async (req, res) => {
    try {
        const response = await axios.get(`${INDEXER_BASE_URL}/v2/accounts/${req.params.accountId}/assets`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve assets for the account.' });
    }
});

// 5. Fetch Applications Created by a Specific Account
app.get('/accounts/:accountId/created-applications', async (req, res) => {
    try {
        const response = await axios.get(`${INDEXER_BASE_URL}/v2/accounts/${req.params.accountId}/created-applications`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch applications created by the account.' });
    }
});

// 6. Retrieve Assets Created by a Specific Account
app.get('/accounts/:accountId/created-assets', async (req, res) => {
    try {
        const response = await axios.get(`${INDEXER_BASE_URL}/v2/accounts/${req.params.accountId}/created-assets`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve assets created by the account.' });
    }
});

// 7. Fetch Transactions Related to a Specific Account
app.get('/accounts/:accountId/transactions', async (req, res) => {
    try {
        const response = await axios.get(`${INDEXER_BASE_URL}/v2/accounts/${req.params.accountId}/transactions`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transactions related to the account.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
