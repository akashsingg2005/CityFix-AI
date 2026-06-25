const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    citizenId:{
    type:String
    },
    ticketId:{
    type:String
},
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        default: "General"
    },

    status: {
        type: String,
        enum: ["Pending", "In Progress", "Resolved"],
        default: "Pending"
    },

    location: {
        type: String,
        required: true
    },

    image: {
        type: String
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    remarks: {
        type: String,
        default: ""
    },

    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Complaint", complaintSchema);