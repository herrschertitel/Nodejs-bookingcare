import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from '../controllers/doctorController'
import patientController from '../controllers/patientControler'
// import res from "express/lib/response";

let router = express.Router();

let initwebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    router.get('/crud', homeController.getCRUD); //create user
    router.get('/get-crud', homeController.displayGetCRUD); //show list of users


    router.post('/post-crud', homeController.postCRUD); //user creation successful message



    router.get('/edit-crud', homeController.getEditCrud)    //edit user's information

    router.post('/put-crud', homeController.putCRUD)

    router.get('/delete-crud', homeController.deleteCRUD)


    //rest  api
    router.post('/api/login', userController.handleLogin)
    router.get('/api/get-all-users', userController.handleGetAllUsers)
    router.post('/api/create-new-user', userController.handleCreateNewUser)
    router.put('/api/edit-user', userController.handleEditUser)
    router.delete('/api/delete-user', userController.handleDeleteUser)

    router.get('/api/allcode', userController.getAllCode)
    router.get('/api/top-doctor-home', doctorController.getTopDoctorHome)

    router.get('/api/get-all-doctor', doctorController.getAllDoctor)
    router.post('/api/save-infor-doctor', doctorController.postInforDoctor)

    router.get('/api/get-detail-doctor', doctorController.getDetailDoctor)
    router.post('/api/bulk-create-schedule', doctorController.bulkCreateSchedule)
    router.get('/api/get-schedule-doctor-by-date', doctorController.getScheduleByDate)
    router.get('/api/get-extra-infor-doctor', doctorController.getExtraInforDoctor)
    router.get('/api/get-infor-doctor-for-modal', doctorController.getInforDoctor)

    router.post('/api/patient-booking-appointment', patientController.postBookingAppoiment)
    return app.use("/", router);
}

module.exports = initwebRoutes
