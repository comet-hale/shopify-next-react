require(isomorphic-fetch);
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default : createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE-ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_KEY, SHOPIFY_SECRET_API_KEY } = process.env;

app.prepare().then(() => {});