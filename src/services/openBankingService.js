const OpenBankingBrasilApi = require('../api/openBankingBrasilApi');
const ParticipantsRepository = require('../repositories/participantsRepository')

const { DataSanitizer } = require('../utils/utils');

const GetAllParticipants = async () => {

    try {
        const banks = await ParticipantsRepository.Get();
        if (banks?.length) return banks
        return [];
    } catch (error) {
        return error;
    }
}

const InsertParticipants = async (participants) => {
    try {
        const banks = await ParticipantsRepository.Insert(participants);
        if (banks) {
            return true;
        }
        return false;
    } catch (error) {
        return error;
    }
}

const UpdateDatabaseData = async () => {
    try {
        console.log('CRON RUNING - OPEN BANKING SERVICE')
        const data = await OpenBankingBrasilApi.getAllParticipants();

        if (data) {
            console.log('CRON RUNNING - GET PARTICIPANTS FROM OPEN BANKING API')
            const objSanitized = await DataSanitizer(data)
            console.log('CRON RUNNING - DATA SANITIZED')
            const inserted = await InsertParticipants(objSanitized);
            if (inserted) {
                console.log('CRON RUNNING - INSERTED DATA ')
            }
            return objSanitized;
        }
    } catch (error) {
        return error;
    }
}

module.exports = {
    GetAllParticipants,
    InsertParticipants,
    UpdateDatabaseData
}