'use strict';

const patientToVm = {
    item: {
        patientId: "idpaciente",
        name: "nome",
        phone: "telefone",
        dataBirth: "datanascimento",
        gender: "sexo",
        weight: "peso",
        height: "altura"
    }
};

const vmToPatient = {
    idpaciente: "patientId",
    nome: "name",
    telefone: "phone",
    dataNascimento: "dataBirth",
    sexo: "gender",
    peso: "weight",
    altura: "height"
}

module.exports = { patientToVm, vmToPatient };