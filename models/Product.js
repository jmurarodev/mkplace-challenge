import { Schema, model } from 'mongoose';

const Product = new Schema({
  name: String,
  brand: String,
  seller: String,
  price: Number,
  slug: String,
});
export default model('Product', Product);
