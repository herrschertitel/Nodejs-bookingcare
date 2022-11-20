import db from '../models/index';
require('dotenv').config()

let createNewHandBook = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || data.imageBase64 || !data.descriptionHTML || !data.descriptionMarkdown) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                await db.HandBook.create({
                    name: data.name,
                    image: data.imageBase64,
                    descriptionHTML: descriptionHTML,
                    descriptionMarkdown: descriptionMarkdown
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createNewHandBook
}