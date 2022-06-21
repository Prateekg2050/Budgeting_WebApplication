const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const Expense = new mongoose.Schema({
    title: { type: String, required: true },
    amt: { type: Number, required: true},
    imp: { type: Number, required: true },
    user: { type: ObjectId, ref: 'User' }
}, { collection: "expense" });

const model = mongoose.model("Expense", Expense)

module.exports = model;