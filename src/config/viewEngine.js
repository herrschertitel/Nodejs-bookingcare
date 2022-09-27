import express from "express";

// var express = require('express')

let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");  //ejs = jsp(java), blade(php) for if else, for
    app.set("views", "./src/views")  //viet cac file client trong thu muc view
}

module.exports = configViewEngine; //de cac file js khac co the dung function nay