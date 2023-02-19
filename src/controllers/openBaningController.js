const OpenBankingService = require("../services/openBankingService")

const GetParticipants = async (request, response) => {
    try {
        const data = await OpenBankingService.GetAllParticipants();
        if (data) {
            return response.status(200).json(data);
        }

        return response.status(500).json({ message: 'Error on bring participants' });
    } catch (error) {
        return response.status(500).send(error?.data?.message);
    }
}


module.exports = {
    GetParticipants
}