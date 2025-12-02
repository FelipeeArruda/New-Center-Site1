// O pacote 'pg' é o driver oficial do Node.js para PostgreSQL
const { Pool } = require('pg');

// Configuração de conexão com o PostgreSQL
// NOTA: Em um ambiente real, essas credenciais viriam de variáveis de ambiente.
const pool = new Pool({
    user: 'seu_usuario_postgres',
    host: 'localhost', // Mude para o host do seu BD, se for remoto
    database: 'newcenter_db',
    password: 'sua_senha_segura',
    port: 5432, // Porta padrão do PostgreSQL
});

// Teste de conexão
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Erro ao adquirir cliente do pool', err.stack);
    }
    console.log('Conexão com PostgreSQL bem-sucedida!');
    release();
});

// Exporta o pool para que outros arquivos possam executar consultas
module.exports = {
    query: (text, params) => pool.query(text, params),
};