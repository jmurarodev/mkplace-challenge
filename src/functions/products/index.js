'use strict';

import database from '../../../database';
import Product from '../../../models/Product';

const connectToDatabase = database;

export async function handle(event) {
  try {
    const connected = await connectToDatabase();
    if (!connected) return { statusCode: 503, body: 'Connection Error' };
    
    const filter = event.queryStringParameters ?? null;

    const products = await Product.find(filter);
  
    return { statusCode: 200, body: JSON.stringify(products) };
  } catch (err) {
    throw new Error(err);
  }
};
