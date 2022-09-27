import doctorService from '../services/doctorService'

let getTopDoctorHome = async (req, res) => {
    //let limit = 10
    let limit = req.query.limit
    if (!limit) limit = 10
    console.log(limit)
    try {
        let response = await doctorService.getTopDoctorHome(+limit)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!!!'
        })
    }
}

let getAllDoctor = async (req, res) => {
    try {

        let doctor = await doctorService.getAllDoctor()
        //console.log(doctor)
        return res.status(200).json(doctor)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from sever'
        })
    }
}

let postInforDoctor = async (req, res) => {
    try {
        let response = await doctorService.saveDetailInforDoctor(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from sever'
        })
    }
}

let getDetailDoctor = async (req, res) => {
    try {
        let infor = await doctorService.getDetailDoctor(req.query.id)
        return res.status(200).json(infor)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from sever'
        })
    }
}
module.exports = {
    getTopDoctorHome: getTopDoctorHome,
    getAllDoctor: getAllDoctor,
    postInforDoctor: postInforDoctor,
    getDetailDoctor: getDetailDoctor
}