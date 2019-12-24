'use strict';

const promise = require('bluebird');

const initOptions = {
    promiseLib: promise
};

const pgp = require('pg-promise')(initOptions);

async function List() {
    const db = pgp(process.env.DATABASE);

    return db.task('List', async t => {
        return await t.any('select idpaciente, nome, idagendamento, dataconsulta  from consultas');
    });
}

async function GetListByPatientId(entity) {
    const db = pgp(process.env.DATABASE);

    return db.task('List', async t => {
        return await t.any('select nome, dataconsulta, idagendamento  from consultas' +
            'WHERE idpaciente = $1', [entity.patientCode]);
    });
}

async function Create(entity) {
    const db = pgp(process.env.DATABASE);

    return db.task('Create', async t => {
            await t.none('INSERT INTO public.agendamentos(idpaciente, dataagendamentoconsulta, dataconsulta) VALUES ($1,$2,$3)', [entity.patientCode, '1900-01-01', entity.dateConsultation]);
        })
        .then(events => {
            return true;
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

async function EditMedicalConsultation(entity) {
    return await db.tx('EditMedicalConsultation', async t => {
            await t.none('UPDATE public.agendamentos' +
                'SET dataconsulta= $1' +
                'WHERE idAgendamento = $2', [ entity.dateConsultation, entity.code]);
        })
        .then(events => {
            return true;
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

async function DeleteMedicalConsultation(entity) {
    return await db.tx('DeleteMedicalConsultation', async t => {
            await t.none('delete from anotacoesconsulta where idconsulta = $1', [entity.code]);
            const result = await t.none('delete from agendamentos where idagendamento = $1', [entity.code]);
            return result;
        })
        .then(({
            result
        }) => {
            return true;
        })
        .catch(error => {
            throw error;
        })
    // .finally(db.$pool.end);
}

module.exports = {
    List,
    GetListByPatientId,
    Create,
    EditMedicalConsultation,
    DeleteMedicalConsultation
}