'use strict';

import database from '../../../database';
import Product from '../../../models/Product';

const connectToDatabase = database;

export async function handle(event) {
  const connected = await connectToDatabase();
  if (!connected) return { statusCode: 503, body: 'Connection Error' };

  const product = await Product.find({ slug: event.pathParameters.productSlug });

  return { statusCode: 200, body: JSON.stringify(product) };
};
