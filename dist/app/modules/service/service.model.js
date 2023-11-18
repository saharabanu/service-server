"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    title: String,
    address: String,
    country: String,
    category: String,
    price: Number,
    availability: {
        availableRooms: Number,
        checkInTime: String,
        checkOutTime: String,
    },
    contact: String,
    images: [String],
    description: [String],
    reviews: [String],
    roomFacilities: [String],
    hotelsFacilities: [String],
    ratings: {
        averageRating: Number,
        totalReviews: Number,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Service = (0, mongoose_1.model)('Service', serviceSchema);
