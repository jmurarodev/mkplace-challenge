'use strict';

import database from '../../../database';
import Product from '../../../models/Product';

const connectToDatabase = database;

export async function handle(event) {
  try {
    const connected = await connectToDatabase();
    if (!connected) return { statusCode: 503, body: 'Connection Error' };
    
    const filter = event.queryStringParameters ?? null;
    if (filter.min_price || filter.max_price) {
      var priceRange = {
          $gte: filter.min_price,
          $lte: filter.max_price 
      }
    }

    // console.log(priceRange)
    const products = await Product.find(priceRange ?? null);
    // const products = await Product.find(and((eq('price', filter.min_price), lt('price', filter.max_price))));
  
    return { statusCode: 200, body: JSON.stringify(products) };
  } catch (err) {
    throw new Error(err);
  }
};
