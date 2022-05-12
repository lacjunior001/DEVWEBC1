const express = require('express')
const app = express();
const port = 3000
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const atualizarBanco = async () => {

    const database = require('./db/db');
    const Feedback = require('./Model/feedback');
    const Setor = require('./Model/setor');
    const Pessoa = require('./Model/pessoa');
    try {
        const resultado = await database.sync();
        /*console.log(resultado);*/
    } catch (error) {
        console.log(error);
    }
};
await atualizarBanco()

const mainRoutes = require('./Routes/main');
app.use(mainRoutes)

const setorRoutes = require('./Routes/setor');
app.use(setorRoutes)

const pessoaRoutes = require('./Routes/pessoa');
app.use(pessoaRoutes)

const feedbackRoutes = require('./routes/feedback');
app.use(feedbackRoutes)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

