import handbookService from '../services/handbookService'

let createNewHandBook = async (req, res) => {
    try {
        let res = await handbookService.createNewHandBook(req.body)
        return res.status(200).json(res)
    } catch (e) {
        console(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from sever'
        })
    }
}

module.exports = {
    createNewHandBook
}