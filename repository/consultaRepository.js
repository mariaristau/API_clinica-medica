import conexao from "../database/conexao.js";

export async function cadastrar(consulta) {
    const sql = "INSERT INTO consulta (data_hora, motivo, status) VALUES (? , ? , ?)"
    const [resultado] = await conexao.execute(
        sql, [consulta.data_hora, consulta.motivo, consulta.status]
    );

    return resultado.insertId;
}

export async function listar() {
    const sql = "SELECT * FROM consulta ORDER BY id_consulta";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarPorId(id) {
    const sql = "SELECT * FROM consulta WHERE id_consulta = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizar(id, consulta) {
    const sql = "UPDATE consulta SET data_hora = ?, motivo = ?, status = ? WHERE id_consulta = ?";
    const [resultado] = await conexao.execute(
        sql, [
            consulta.data_hora,
            consulta.motivo,
            consulta.status,
            id
        ]
    );

    return resultado.affectedRows;
}

export async function deletar(id) {
    const sql = "DELETE FROM consulta WHERE id_consulta = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado.affectedRows;
}

export async function vincularMedico(idConsulta, idMedico) {
    const sql = "UPDATE consulta SET fk_id_medico = ? WHERE id_consulta = ?";
    const [resultado] = await conexao.execute(sql, [idMedico, idConsulta]);

    return resultado.affectedRows;
}

export async function vincularPaciente(idConsulta, idPaciente) {
    const sql = "UPDATE consulta SET fk_id_paciente = ? WHERE id_consulta = ?";
    const [resultado] = await conexao.execute(sql, [idPaciente, idConsulta]);

    return resultado.affectedRows;
}

export async function removerMedico(idConsulta) {
    const sql = "UPDATE consulta SET fk_id_medico = NULL WHERE id_consulta = ?";
    const [resultado] = await conexao.execute(sql, [idConsulta]);

    return resultado.affectedRows;
}

export async function removerPaciente(idConsulta) {
    const sql = "UPDATE consulta SET fk_id_paciente = NULL WHERE id_consulta = ?";
    const [resultado] = await conexao.execute(sql, [idConsulta]);

    return resultado.affectedRows;
}
