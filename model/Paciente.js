export class Paciente {
    constructor (nome, cpf, data_nascimento) {
        this.nome = nome,
        this.cpf = cpf,
        this.data_nascimento = data_nascimento
    }

    validar() {
        if (!this.nome || this.nome.trim().length < 3) {
            throw new Error("O nome deve conter pelo menos 3 caracteres");
        }

        if(!this.cpf) {
            throw new Error("O CPF é obrigatório");
        }

        if(!this.data_nascimento || !this.data_nascimento.test(/^(\d{2})\/(\d{2})\/(\d{4}))$/)) {
            throw new Error("A data de nascimento é obrigatória");
        }
    }

    static validarId(id) {
        if(!Number.isInteger(id) || id <= 0) {
            throw new Error(
                "O ID do paciente deve ser um número inteiro maior que zero"
            );
        }
    }
}