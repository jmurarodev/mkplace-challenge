'use strict';

import database from '../../../database';
import Product from '../../../models/Product';

const connectToDatabase = database;

export async function handle(event) {
  const { id } = JSON.parse(event.pathParameters.id);
  if (!id) return { statusCode: 400, body: 'Bad Request' };

  const connected = await connectToDatabase();
  if (!connected) return { statusCode: 503, body: 'Connection Error' };

  const { name, brand, seller, price } = JSON.parse(event.body);

  const updatedProduct = Product.findByIdAndUpdate(id, {
    name, brand, price, seller
  }, { new: false });

  if (!updatedProduct) return { statusCode: 500, body: 'The product could not be updated' };

  return { statusCode: 200, body: JSON.stringify(updatedProduct) }
};
