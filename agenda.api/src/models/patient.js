'use strict';

const promise = require('bluebird');

const initOptions = {
    promiseLib: promise
};

const pgp = require('pg-promise')(initOptions);

async function GetById(entity) {
    const db = pgp(process.env.DATABASE); // database instance;

    return await db.tx('GetById', async t => {

            let result = await t.any(' SELECT nome' +
                ',telefone' +
                ',datanascimento' +
                ',altura' +
                ',peso' +
                ',sexo' +
                'FROM public.pacientes' +
                'WHERE idpacient = $1', [entity.idPatient]);
            return {
                result
            };
        })
        .then(({
            result
        }) => {
            return result;
        })
        .catch(error => {
            console.log('ERROR:', error);
            throw error;
        })
        .finally(db.$pool.end);
}

async function Create(entity) {
    const db = pgp(process.env.DATABASE);

    return db.task('Create', async t => { 
            await t.none('INSERT INTO public.pacientes(nome, telefone, datanascimento, altura, peso, sexo) VALUES ($1,$2,$3,$4,$5,$6)', [entity.name, entity.phone, entity.dateBirth, entity.height, entity.weight, entity.gender]);
        })
        .then(events => {
            return true;
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

async function EditPatient(entity) {
    const db = pgp(process.env.DATABASE);

    return db.task('EditPatient', async t => {
            await t.none('UPDATE public.pacientes' +
                'SET nome= $1, telefone= $2, datanascimento= $3, altura= $4, peso= $5, sexo = $6' +
                'WHERE idPaciente = $7', [entity.name, entity.phone, entity.dateBirth, entity.height, entity.weight, entity.gender, entity.idPaciente]);
        })
        .then(events => {
            return true;
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

async function DeletePatient(entity) {đ
    const db = pgp(process.env.DATABASE);

    return db.task('DeletePatient', async t => {
            await t.none('DELETE FROM public.pacientes WHERE idPaciente = $1', [entity.idPaciente]);
        })
        .then(events => {
            return true;
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

async function List() {
    const db = pgp(process.env.DATABASE);

    return db.task('List', async t => {
        return await t.any('SELECT idpaciente, nome, telefone, datanascimento, altura, peso, sexo' +
            ' FROM public.pacientes' +
            ' ORDER BY nome ASC');
    });
}

module.exports = {
    GetById,
    Create,
    EditPatient,
    DeletePatient,
    List
};