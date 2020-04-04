const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

ProductSchema.plugin(mongoosePaginate);

const product = mongoose.model('Product', ProductSchema);

product.paginate().then({});