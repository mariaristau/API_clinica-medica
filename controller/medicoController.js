import { Medico } from "../model/Medico.js";
import { 
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    deletar
 } from "../repository/medicoRepository";

 export async function cadastrarMedico(req, res) {
    try {
        const {nome, crm, especialidade} = req.body;

        if (!nome === undefined || crm === undefined || especialidade === undefined) {
            return res.status(400).json({mensagem: "Nome, CRM e especialidade são obrigatórios"});

        }

        const medico = new Medico(nome, crm, especialidade);
        const id = await cadastrar(medico);

        res.status(201).json({id_medico: id});

    } catch (erro) {
        return res.status(500).json({mensagem: "Erro ao listar produto"});
    }
 }

 export async function listarMedico(req, res) {
    try {
        const medicos = await listar();

        return res.status(200).json(medicos);

    } catch (erro) {
        return res.status(500).json({mensagem: "Erro ao listar produtos"});
    }
 }

 export async function buscarPorId(req, res) {
    try {
        const id = Number(req.params.id);
        const medico = await buscarPorId(id);

        if(!medico) {
            return res.status(404).json({mensagem: "Médico não encontrado"});
        }

        res.status(200).json(medico);

    } catch (erro) {
        return res.status(500).json({mensagem: "Erro ao buscar médico"});
    }
 }

 export async function atualizarProduto(params) {
    
 }
