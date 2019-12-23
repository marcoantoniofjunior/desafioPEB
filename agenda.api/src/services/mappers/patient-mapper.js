'use strict';

const patientToVm = {
    item: {
        patientId: "idpaciente",
        name: "nome",
        phone: "telefone",
        dateBirth: "datanascimento",
        gender: "sexo",
        weight: "peso",
        height: "altura"
    }
};

const vmToPatient = {
    idpaciente: "patientId",
    nome: "name",
    telefone: "phone",
    dataNascimento: "dateBirth",
    sexo: "gender",
    peso: "weight",
    altura: "height"
}

module.exports = { patientToVm, vmToPatient };