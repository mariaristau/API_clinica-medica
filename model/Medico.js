export class Medico {
    constructor (nome, crm, especialidade) {
        this.nome = nome,
        this.crm = crm,
        this.especialidade = especialidade
    }

    validar() {
        if(!this.nome || this.nome.trim().length < 3) {
            throw new Error("O nome precisa ter mais de 3 caracteres");
        }

        if(!this.crm || this.crm) {
            throw new Error("O CRM deve ser informado");
        }

        if(!this.especialidade || this.especialidade.trim().length < 3) {
            throw new Error("A especialidade deve ter mais de 3 caracteres");
        }
    }

    static validarId(id ) {
        if (!Number.idInterger(id) || id <=0) {
            throw new Error(
                "O ID do médico deve ser maior um número inteiro positivo"
            );
        }
    }
}