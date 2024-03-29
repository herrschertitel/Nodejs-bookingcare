import patientService from '../services/patientService'

let postBookingAppoiment = async (req, res) => {
    try {
        let infor = await patientService.postBookingAppoiment(req.body)
        return res.status(200).json(infor)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server'
        })
    }
}

let postVerifyBookingAppoiment = async (req, res) => {
    try {
        let infor = await patientService.postVerifyBookingAppoiment(req.body)
        return res.status(200).json(infor)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server'
        })
    }
}

let getHistory = async (req, res) => {
    try {
        let infor = await patientService.getHistory(req.query.email)
        return res.status(200).json(infor)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server'
        })
    }
}

module.exports = {
    postBookingAppoiment,
    postVerifyBookingAppoiment,
    getHistory
}