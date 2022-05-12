# Projeto Prático Avaliação C1
## Desenvolvimento Web II
### Sistema de Feedback

1) Primeira parte instalação e configuração do sqlite3
2) Criação das seguintes tabelas:

~~~SQL
CREATE TABLE Setor (
    id        INTEGER       PRIMARY KEY ASC ON CONFLICT ABORT AUTOINCREMENT
                            UNIQUE ON CONFLICT ABORT,
    nome      VARCHAR (30)  NOT NULL
                            UNIQUE ON CONFLICT ABORT,
    descricao VARCHAR (255) 
);

CREATE TABLE Pessoa (
    id    INTEGER      PRIMARY KEY ASC ON CONFLICT ABORT AUTOINCREMENT
                       UNIQUE ON CONFLICT ABORT,
    nome  VARCHAR (30) NOT NULL ON CONFLICT ABORT,
    email VARCHAR (30),
    Setor INTEGER      REFERENCES Setor (id) ON DELETE RESTRICT
);

CREATE TABLE Feedback (
    Id       INTEGER       PRIMARY KEY ASC AUTOINCREMENT
                           UNIQUE ON CONFLICT ABORT
                           NOT NULL,
    Titulo   VARCHAR (30),
    Texto    VARCHAR (255),
    Nota     INTEGER       NOT NULL,
    Avaliado INTEGER       NOT NULL
                           REFERENCES Pessoa (Id) 
);

CREATE TABLE Feedback (
    Id       INTEGER       PRIMARY KEY ASC AUTOINCREMENT
                           UNIQUE ON CONFLICT ABORT
                           NOT NULL,
    Titulo   VARCHAR (30),
    Texto    VARCHAR (255),
    Nota     INTEGER       NOT NULL,
    Avaliado INTEGER       NOT NULL
                           REFERENCES Pessoa (Id) 
);

~~~