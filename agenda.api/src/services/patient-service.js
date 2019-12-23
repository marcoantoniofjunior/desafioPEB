"use strict";

const models = require("../models/patient");
const mappers = require("../services/mappers/patient-mapper");

var DataTransform = require("node-json-transform").DataTransform;

async function GetById(obj) {
    try {
        let result = await models.GetById(obj);
        var vm = DataTransform(result, mappers.patientToVm).transform();
        return vm;
    } catch (err) {
        throw err;
    }
}

async function Create(entity) {
    try {
        var r = await models.Create(entity);
        return r;
    } catch (error) {
        throw error;
    }
}

async function EditPatient(entity) {
    try {
        var r = await models.EditPatient(entity);
        return r;
    } catch (error) {
        throw error;
    }
}

async function DeletePatient(entity) {
    try {
        var r = await models.DeletePatient(entity);
        return r;
    } catch (error) {
        throw error;
    }
}

async function List() {
    try {
        let result = await models.List();
        var vm = DataTransform(result, mappers.patientToVm).transform();
        return vm;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    GetById,
    Create,
    EditPatient,
    DeletePatient,
    List
};