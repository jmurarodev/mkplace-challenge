'use strict';

import database from '../../../database';
import Product from '../../../models/Product';
import slugify from 'slugify';

const connectToDatabase = database;

export async function handle(event) {
  const { name, brand, seller, price } = JSON.parse(event.body);
  if (!name || !brand || !seller|| !price) return { statusCode: 400, body: 'Bad Request' };
  
  const connected = await connectToDatabase();
  if (!connected) return { statusCode: 503, body: 'Connection Error' };

  const slug = `${name} ${brand} ${Date.now()}`;
  const newProduct = new Product({
    name, brand, seller, price, slug: slugify(slug).toLowerCase()
  });

  if (!newProduct.save()) return { statusCode: 500, body: 'The product could not be created' };

  return { statusCode: 201, body: JSON.stringify(newProduct) };
}
