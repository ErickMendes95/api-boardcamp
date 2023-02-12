import { db } from "../database/database.js";

export async function buscarAlugueis(req, res){
    
    try {
        const alugueis = await db.query(`SELECT 
            rentals.*, 
            customers.id AS customer_id, 
            customers.name AS customer_name, 
            games.id AS game_id, 
            games.name AS game_name        
        FROM rentals 
        INNER JOIN "customers"
            ON 'rentals.customerId'='customers.id'
        INNER JOIN "games"
            ON 'rentals.gameId'='games.id'
        `);
        
        return res.send(alugueis.rows);

    } catch (err) {
        return res.status(500).send(console.log(err.message));
    };
};

export async function inserirAluguel(req, res){

    const {id} = req.params;
    
    try {
        
        
        
    } catch (error) {
        return res.status(500).send(console.log(error.message));
    }

};

export async function finalizarAluguel(req, res){
    const cliente = req.body;
    
    try {
        
        
    } catch (error) {
        return res.status(500).send(console.log(error.message));
    }
}

export async function deletarAluguel(req,res){

    const cliente = req.body;

    try {


    }  catch (error) {
        return res.status(500).send(console.log(error.message));
    }
}