const openBankingApi = require("../configs/axiosConfig");

const getAllParticipants = async () => {
    try {
        const { data } = await openBankingApi.get('/participants');
        if (data) {
            return data;
        }
        return [];
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllParticipants
}