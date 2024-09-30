import mongoose from "mongoose";
const Schema = mongoose.Schema;

//schema para contato
const contactSchema = new Schema({
    number: {type: String, required: true },
    email: {type: String, required: true}
});

const orderSchema = new Schema({
    repair: {type: Boolean, required: true},
    exchange: {type: Boolean, required: true},
    extendWarranty: {type: Boolean, required: true},
    purchaseDate: {type: Date, required: true},
    productType: {type: String, required: true},
    invoiceNumber: {type: String, required: true},
    purchaseValue: {type: Number, required: true}
});

const customerSchema = new Schema({
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    address: {type: String, required: true},
    contact: {type: contactSchema, required: true},
    order: {type: orderSchema, required: true}
});

//cria o modelo mongoose com base no esquema do customer
export const orderModel = mongoose.model('Order', customerSchema);