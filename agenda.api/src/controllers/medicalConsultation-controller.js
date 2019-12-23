'use strict';

const service = require('../services/medicalConsultation-service');

exports.list = async (req, res) => {
    try {
        let r = await service.List();
        res.status(200).send(r);
    } catch (error) {
        res.status(500).send({
            Error: err.message,
            Detail: err.stack
        });
    }
}

exports.getListByPatientId = async (req, res) => {
    try {
        let r = await service.GetListByPatientId(req.body);
        res.status(200).send(r);
    } catch (error) {
        res.status(500).send({
            Error: err.message,
            Detail: err.stack
        });
    }
}

exports.create = async(req,res) => {
    try {
        let r = await service.Create(req.body);
        res.status(200).send(r);
    } catch (error) {
        res.status(500).send({
            Error: err.message,
            Detail: err.stack
        });
    }
}

exports.edit = async(req,res) => {
    try {
        let r = await service.EditMedicalConsultation(req.body);
        res.status(200).send(r);
    } catch (error) {
        res.status(500).send({
            Error: err.message,
            Detail: err.stack
        });
    }
}

exports.delete = async(req,res) => {
    try {
        let r = await service.DeleteMedicalConsultation(req.body);
        res.status(200).send(r);
    } catch (error) {
        res.status(500).send({
            Error: err.message,
            Detail: err.stack
        });
    }
}