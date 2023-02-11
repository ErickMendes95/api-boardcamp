import { db } from "../database/database";

export async function buscarJogos(req, res){
    
    try {
        const jogos = await db.query("SELECT * FROM games");
        
        return res.send(jogos.rows);

    } catch (err) {
        return res.status(500).send(console.log(err.message));
    };
};

export async function inserirJogo(req, res){

    const jogo = req.body;

    try {
        
        if((jogo.stockTotal || jogo.pricePerDay) <= 0 ){
            return res.sendStatus(400);
        }
        
        const verificaNome = await db.query(`SELECT * FROM games where name= ${jogo.name}`);

        if(verificaNome.rowCount === 1){
            return res.sendStatus(409);
        }

        await db.query(`INSERT INTO games (name, image, stockTotal, pricePerDay) 
        VALUES (${jogo.name},${jogo.image},${jogo.stockTotal},${jogo.pricePerDay})`);
        
        return res.sendStatus(201);

    } catch (error) {
        return res.status(500).send(console.log(error.message));
    }

};