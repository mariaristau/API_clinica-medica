create database clinica_db;

use clinica_db;

create table medico (
id_medico int primary key auto_increment,
nome varchar(150) not null,
crm varchar(20) not null unique,
especialidade varchar(150) not null
);

create table paciente (
id_paciente int primary key auto_increment,
nome varchar(150) not null,
cpf varchar(11) unique not null,
data_nascimento date not null
);

create table consulta (
id_consulta int primary key auto_increment,
data_hora datetime null,
motivo text not null,
`status` enum("rascunho", "agendada", "concluida", "cancelada"),
fk_id_medico int null,
fk_id_paciente int null,

constraint fk_id_medico
	foreign key (fk_id_medico)
    references medico (id_medico)
    ON DELETE SET NULL
    ON UPDATE CASCADE,

constraint fk_id_paciente
	foreign key (fk_id_paciente)
    references paciente (id_paciente)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);