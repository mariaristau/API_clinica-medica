export class Consulta {
    constructor(data_hora, motivo, status) {
        this.data_hora = data_hora,
        this.motivo = motivo,
        this.status = status
    }

    validar() {
        
        if(!this.data_hora || this.data_hora.test(/^(\d{2})\/(\d{2})\/(\d{4}))$/)) {
            throw new Error("A data e hora são obrigatórias e devem ser válidas");
        }

        if(!this.motivo || this.motivo.trim().length < 5) {
            throw new Error("O motivo deve ter pelo menos 5 caracteres");
        }

        if(!this.status === "rascunho" || !this.status === "agendada" || !this.status ==="concluida" || !this.status === "cancelada") {
            throw new Error("O status deve ser válido: rascunho, agendada, concluida ou cancelada");
        }
    }

    static validarId(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("O ID da consulta deve ser um número inteiro maior que zero");
        }
   }
}