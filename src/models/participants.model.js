const mongoose = require('mongoose');

const ParticipantsSchema = mongoose.Schema({
    organisationName: { type: String, required: true, unique: false },
    status: { type: String, required: true, unique: false },
    logoUrl: { type: String, required: true, unique: false },
    openIDDiscoveryDocument: { type: String, required: true, unique: false },
}, { timestamps: true })


const Participants = mongoose.model("participants", ParticipantsSchema, "participants");

module.exports = Participants;