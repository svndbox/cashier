const plaid = require('plaid');
const envvar = require('envvar');

const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_PUBLIC_KEY = process.env.PLAID_PUBLIC_KEY;
const PLAID_ENV = envvar.string('PLAID_ENV', 'sandbox');

const plaidClient = new plaid.Client(
	PLAID_CLIENT_ID,
	PLAID_SECRET,
	PLAID_PUBLIC_KEY,
	plaid.environments[PLAID_ENV]
);