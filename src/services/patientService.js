import db from '../models/index';
require('dotenv').config()

let postBookingAppoiment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.doctorId || !data.date || !data.timeType) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3',
                        firstName: data.name,
                        gender: data.gender
                    },
                    raw: true
                })

                console.log(user[0])
                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType
                        }
                    })
                }
            }

            resolve({
                errCode: 0,
                errMessage: 'Save infor doctor succeed'
            })
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

module.exports = {
    postBookingAppoiment
}