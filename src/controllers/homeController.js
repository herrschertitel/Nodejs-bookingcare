// let getHomePage = (req, res) => {
//     return res.send("Hello world from controller")
// }
import db from '../models/index'
import CRUDSercive from '../services/CRUDSercive'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('./test/about.ejs')
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDSercive.createNewUser(req.body)
    //console.log(message)
    return res.send('post crud from sever');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDSercive.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let getEditCrud = async (req, res) => {
    //console.log(req.query.id)
    let userId = req.query.id
    if (userId) {
        let userData = await CRUDSercive.getUserInfoById(userId)
        //check user data not found 
        return res.render('editCRUD.ejs', {
            user: userData
        })
    }
    else {
        return res.send("User not found")
    }

}

let putCRUD = async (req, res) => {
    let data = req.body
    //console.log(data)
    let allUsers = await CRUDSercive.updateUserData(data)
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}

/*let getDeleteCrud = async (req, res) => {
    console.log(req.query.id)
    let userId = req.query.id
    if (userId) {
        let userData = await CRUDSercive.getUserInfoById(userId)
        //check user data not found 
        return res.render('deleteCRUD.ejs', {
            user: userData
        })
    } 
    else {
        return res.send("User not found")
    }
}*/

let deleteCRUD = async (req, res) => {
    console.log(req.query.id)
    let id = req.query.id
    if (id) {
        await CRUDSercive.deleteUserById(id)
        return res.send("Delete done")
    }
    else {
        return res.send("User not found")
    }

}
// Object: {
//     key:'',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCrud: getEditCrud,
    putCRUD: putCRUD,
    //getDeleteCrud : getDeleteCrud,
    deleteCRUD: deleteCRUD
}