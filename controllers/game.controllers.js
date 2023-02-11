import { db } from "../database/database.js";

export async function buscarJogos(req, res){
    
    try {
        const jogos = await db.query("SELECT * FROM games");
        
        return res.send(jogos.rows);

    } catch (err) {
        return res.status(500).send(console.log(err.message));
    };
};

export async function inserirJogo(req, res){
    
    const game = req.body;
    console.log(game)
    try {
    
        // if((jogo.stockTotal || jogo.pricePerDay) <= 0 ){
        //     return res.sendStatus(400);
        // }
        
        const verificaJogo = await db.query("SELECT * FROM games WHERE name="+game.name);
        console.log(verificaJogo.rows)
        
        // if(verificaJogo.rowCount !== 0){
        //     return res.sendStatus(409);
        // }
        
        // await db.query(`INSERT INTO games (name, image, stockTotal, pricePerDay) 
        // VALUES (${jogo.name}, ${jogo.image}, ${jogo.stockTotal}, ${jogo.pricePerDay});`);
        
        return res.sendStatus(201);

    } catch (error) {
        return res.status(500).send(console.log(error.message));
    }

};