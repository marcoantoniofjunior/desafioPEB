'use strict';

const promise = require('bluebird');

const initOptions = {
    promiseLib: promise
};

const pgp = require('pg-promise')(initOptions);

async function GetById(entity){
    const db = pgp(process.env.DATABASE); // database instance;

    return await db.tx('GetById', async t => {

        let result = await t.any(' SELECT nome' +
                                        ',telefone' +
                                        ',datanascimento' +
                                        ',altura' +
                                        ',peso' +
                                   'FROM public.pacientes' +
                                   'WHERE idpacient = $1',[entity.idPatient]);
        return {result};
    })
    .then(({result}) => {
        // print new user id + new event id;
        ////console.log('DATA:', result);
        return result;
    })
    .catch(error => {
        console.log('ERROR:', error); // print the error;
        throw error;      
    })
    .finally(db.$pool.end);
}

async function Create(entity)
{
    const db = pgp(process.env.DATABASE); // database instance;

    return db.task('Create', async t => {
        await t.none('INSERT INTO public.pacientes(nome, telefone, datanascimento, altura, peso) VALUES ($1,$2,$3,$4,$5)', [entity.nome, entity.telefone, entity.dataNascimento, entity.altura, entity.peso]);        
    })
    .then(events => {
        // success; 
        return true;
    })
    .catch(error => {
        // error
        console.log(error);
        throw error;      
    });
}

async function EditPatient(entity){
    const db = pgp(process.env.DATABASE); // database instance;

    return db.task('EditPatient', async t => {
        await t.none('UPDATE public.pacientes' +
        'SET nome=$1, telefone=$2, datanascimento=$3, altura=$4, peso=$5' +
        'WHERE idPaciente = $6', [entity.nome, entity.telefone, entity.dataNascimento, entity.altura, entity.peso, entity.idPaciente]);        
    })
    .then(events => {
        // success; 
        return true;
    })
    .catch(error => {
        // error
        console.log(error);
        throw error;      
    });
}

async function DeletePatient(entity)
{
    const db = pgp(process.env.DATABASE); // database instance;

    return db.task('DeletePatient', async t => {
        await t.none('DELETE FROM public.pacientes WHERE idPaciente = $1', [entity.idPaciente]);        
    })
    .then(events => {
        // success; 
        return true;
    })
    .catch(error => {
        // error
        console.log(error);
        throw error;      
    });
}

async function List(){
    const db = pgp(process.env.DATABASE); 
    
    return db.task('List', async t => {
        return await t.any('SELECT idpaciente, nome, telefone, datanascimento, altura, peso' +
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