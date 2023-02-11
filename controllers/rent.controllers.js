import { db } from "../database/database.js";

export async function buscarAlugueis(req, res){
    
    try {
        const alugueis = await db.query("SELECT * FROM rentals JOIN customers");
        
        return res.send(clientes.rows);

    } catch (err) {
        return res.status(500).send(console.log(err.message));
    };
};

export async function buscarClientePorId(req, res){

    const {id} = req.params;
    
    try {
        
        const cliente = await db.query(`SELECT * FROM customers where id= ${id}`);

        if(cliente.rowCount === 0){
            return res.sendStatus(404);
        }

        return res.send(cliente.rows[0]);

    } catch (error) {
        return res.status(500).send(console.log(error.message));
    }

};

export async function inserirCliente(req, res){
    const cliente = req.body;
    
    try {
        
        const verificaCPF = await db.query(`SELECT * FROM customers where cpf= ${cliente.cpf}`);

        if(verificaCPF.rowCount === 1){
            return res.sendStatus(409);
        }

        await db.query(`INSERT INTO customers (name,phone,cpf,birthday) 
        VALUES (${cliente.name},${cliente.phone},${cliente.cpf},${cliente.birthday})`);

        return res.sendStatus(201);

    } catch (error) {
        return res.status(500).send(console.log(error.message));
    }
}

export async function atualizarCliente(req,res){

    const cliente = req.body;

    try {

        const verificaCPF = await db.query(`SELECT * FROM customers where cpf= ${cliente.cpf}`);

        if(verificaCPF !== cliente.name){
            return res.sendStatus(409);
        }

        await db.query(`UPDATE customers (name,phone,cpf,birthday) 
        VALUES (${cliente.name},${cliente.phone},${cliente.cpf},${cliente.birthday})`);

        return res.sendStatus(201);

    }  catch (error) {
        return res.status(500).send(console.log(error.message));
    }
}