require('dotenv').config()
import nodemailer from 'nodemailer'
import _ from 'lodash';
import moment from 'moment';
import localization from 'moment/locale/vi'


let contentMail = (data) => {
    let result = ''
    if (data.language === 'vi') {
        result = `
            <p>Xin chào, ${data.name}!</p>
            <p>Bạn đã đặt lịch khám bệnh thành công!</p>
            <p>Thông tin đặt lịch khám bệnh:</p>
            <div><b>Bác sĩ: ${data.lastName} ${data.firstName}</b></div>
            <div><b>Thời gian: ${buildTimeBooking(data)}</b></div>
            <p>Vui lòng xác click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
            <div>
            <a href=${data.verificationLink} target='_blank'>Click here</a>
            </div>

            <div>Xin chân thành cảm ơn!</div>
        `
    }
    if (data.language === 'en') {
        result = `
            <p>Hello, ${data.name}!</p>
            <p>You have successfully booked a medical appointment!</p>
            <p>Information to book an appointment:</p>
            <div><b>Doctor: ${data.lastName} ${data.firstName}</b></div>
            <div><b>Time: ${buildTimeBooking(data)}</b></div>
            <p>Please click on the link below to confirm and complete the booking procedure</p>
            <div>
            <a href=${data.verificationLink} target='_blank'>Click here</a>
            </div>

            <div>Thank you very much!</div>
        `
    }
    if (data.language === 'ru') {
        result = `
            <p>Здравствуйте, ${data.name}!</p>
            <p>Вы успешно записались на прием к врачу!</p>
            <p>Информация для записи на прием:</p>
            <div><b>Врач: ${data.lastName} ${data.firstName}</b></div>
            <div><b>Время: ${buildTimeBooking(data)}</b></div>
            <p>Пожалуйста, нажмите на ссылку ниже, чтобы подтвердить и завершить процедуру бронирования</p>
            <div>
            <a href=${data.verificationLink} target='_blank'>Нажмите здесь</a>
            </div>

            <div>Большое спасибо!</div>
        `
    }
    return result
}

let buildTimeBooking = (data) => {
    let date = '', time = ''
    if (data.dataTime && !_.isEmpty(data.dataTime)) {

        if (data.language === 'vi') {
            date = moment.unix(+data.dataTime.date / 1000).format('dddd - DD/MM')
            time = data.dataTime.timeTypeData.valueVi
        }
        if (data.language === 'en') {
            date = moment.unix(+data.dataTime.date / 1000).locale('en').format('dd - DD/MM')
            time = data.dataTime.timeTypeData.valueEn
        }
        if (data.language === 'ru') {
            date = moment.unix(+data.dataTime.date / 1000).locale('ru').format('dd - DD/MM')
            time = data.dataTime.timeTypeData.valueRu
        }
    }
    time = `${time} - ${date}`
    return time
}

let sendMail = async (data) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.APP_GMAIL, // generated ethereal user
            pass: process.env.APP_GMAIL_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"no-reply" <hoangk24aas@gmail.com>', // sender address
        to: data.email, // list of receivers
        subject: "Online Appointment Booking", // Subject line
        html: contentMail(data), // html body
    });
}
module.exports = {
    sendMail
}