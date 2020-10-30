import mongoose from 'mongoose';
import fs from 'fs';


export const MONGO_URL = process.env.MONGO_URL || 'mongodb://db'
mongoose.connect(MONGO_URL, { useNewUrlParser: true }, async (err) => {
  // Fail quickly
  if (err) {
    console.error("Failed to database.");
    process.exit(-1);
  }

  // Fill database with initial data if necessary.
  if (await Garment.countDocuments() == 0) {
    console.log("Filling database with initial data");

    const garmentJson = fs.readFileSync("./garment_items.jl")
      .toString()
      .split('\n')
      .filter(l => !!l.length)
      .map(g => JSON.parse(g));
    Garment.collection.insert(garmentJson);
  }
});

/**
 * Connection Management
 */
export const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to mongodb on", MONGO_URL);
});

/**
 * Schema
 */
const GarmentSchema = new mongoose.Schema({
    "product_categories_mapped": { "type": [ "Number" ] },
    "product_id": { "type": "String" },
    "url": { "type": "String" },
    "gender": { "type": "String" },
    "brand": { "type": "String" },
    "product_description": { "type": "String" },
    "image_urls": { "type": [ "String" ] },
    "product_imgs_src": { "type": [ "String" ] },
    "source": { "type": "String" },
    "product_categories": { "type": [ "String" ] },
    "images": { "type": [ "Mixed" ] },
    "price": { "type": "String" },
    "product_title": { "type": "String" }
});
GarmentSchema.index({ name: 'text', 'product_title': 'text'})
export const Garment = new mongoose.model('Garment', GarmentSchema);
