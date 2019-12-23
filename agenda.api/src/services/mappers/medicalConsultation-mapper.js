'use strict';

const medicalConsultationToVm = {
    item: {
        code: "idagendamento",
        patientCode: "idpaciente",
        name: "nome",
        dateConsultation: "dataconsulta",
        status: "status",
    }
}

const vmToMedicalConsultation = {
    idAgendamento: "code",
    idPaciente: "patientCode",
    nome: "name",
    dataConsulta: "dateConsultation",
    status: "status"
}

module.exports = {
    medicalConsultationToVm,
    vmToMedicalConsultation
};