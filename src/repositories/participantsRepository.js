const Participants = require('../models/participants.model')

const Insert = async (participants) => {
    try {
        const oldParticipants = await Get();
        await Participants.deleteMany({});
        const insertedParticipants = await Participants.insertMany(participants);
        if (insertedParticipants.length) {
            return true;
        } else {
            await Participants.insertMany(oldParticipants);
        }
        return false;
    } catch (error) {
        return error;
    }
}

const Get = async () => {
    try {
        const participantsDb = await Participants.find({}, { __v: 0 });
        if (participantsDb.length) return participantsDb;
        return [];
    } catch (error) {
        return error;
    }
}

module.exports = {
    Insert,
    Get
}