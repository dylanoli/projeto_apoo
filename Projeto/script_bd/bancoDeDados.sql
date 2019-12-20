/* Banco de dados */
/*
create table usuario(
    login varchar(30) primary key,
    senha varchar(24),
    nome text,
    email text,
    privilegio int
);

create table funcionario(
    login_func varchar(30) references usuario (login)
);

create table administrador(
    login_adm varchar(30) references usuario (login)
);

create table licenca(
	id int primary key not null AUTO_INCREMENT,
    nome text,
    validade date
);

create table condicionante(
    id int primary key not null AUTO_INCREMENT,
    login varchar(30) references funcionario(login_func),
    id_licenca int references licenca(id),
    num_cond int,
    nome text,
    tipo text,
    prazo date,
    descricao text,
    arq boolean,
    tipo_arq text,
    desc_arq text,
    status text
);

create table requisicao(
	login varchar(30) references funcionario(login_func),
    id_condic int references condicionante(id),
    id int primary key not null AUTO_INCREMENT,
    data date
);

create table req_conclusao_cond(
    id_req int references requisicao(id),
    descricao text,
    arquivo LONGBLOB 
);

create table req_prazo(
	id_req int references requisicao(id),
    prazo date,
    justificativa text
);
*/

