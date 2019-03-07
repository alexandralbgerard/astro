import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create the User Schema.
const AstroSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  sign: {
    type: String,
    required: true,
  },
  dates: {
    type: String,
    required: true,
  },
});

const Astro = mongoose.model('Astro', AstroSchema);

export default Astro;
