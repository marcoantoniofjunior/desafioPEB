'use strict';

const service = require('./node_modules../node_modules');

exports.getById = async (req, res) => {

    try {
        let r = await service.GetById(req.body);
        res.status(200).send(r);
    } catch (err) {
        res.status(500).send({
            Error: err.message,
            Detail: err.stack
        });
    }

};

exports.create = async (req, res) => {
    try {
        let r = await service.Create(req.body);
        res.status(200).send(r);
    } catch (err) {
        res.status(500).send({
            Error: err.message,
            Detail: err.stack
        });
    }
}

exports.edit = async (req, res) => {
    try {
        let r = await service.EditPatient(req.body);
        res.status(200).send(r);
    } catch (err) {
        res.status(500).send({
            Error: err.message,
            Detail: err.stack
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        let r = await service.DeletePatient(req.body);
        res.status(200).send({
            id: id,
            item: req.body
        });
    } catch (err) {
        res.status(500).send({
            Error: err.message,
            Detail: err.stack
        });
    }
}

exports.list = async (req, res) => {
    try {
        let r = await service.List();
        res.status(200).send(r);
    } catch (err) {
        res.status(500).send({
            Error: err.message,
            Detail: err.stack
        });
    }
}