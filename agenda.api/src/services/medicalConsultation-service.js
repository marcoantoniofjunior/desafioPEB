"use strict";

const models = require("../models/medicalConsultation");
const mappers = require("../services/mappers/medicalConsultation-mapper");

var DataTransform = require("node-json-transform").DataTransform;

async function List() {
    try {

        let result = await models.List();
        var vm = DataTransform(result, mappers.medicalConsultationToVm).transform();
        return vm;
    } catch (err) {
        throw err;
    }
}

async function GetListByPatientId(obj) {
    try {
        var entity = DataTransform(obj, mapper.vmToPatient).transform();
        var r = await models.GetListByPatientId(entity);
    } catch (error) {

    }
}

async function Create(obj) {
    try {
        var entity = DataTransform(obj, mapper.vmToPatient).transform();
        var r = await models.Create(entity);
        return r;
    } catch (error) {
        throw error;
    }
}

async function EditMedicalConsultation(obj) {
    try {
        var entity = DataTransform(obj, mapper.vmToPatient).transform();

        var r = await models.EditMedicalConsultation(entity);

        return r;
    } catch (error) {
        throw error;
    }
}

async function DeleteMedicalConsultation(obj) {
    try {
        var entity = DataTransform(obj, mapper.vmToPatient).transform();
        var r = await models.DeleteMedicalConsultation(entity);
        return r;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    List,
    GetListByPatientId,
    Create,
    EditMedicalConsultation,
    DeleteMedicalConsultation
}