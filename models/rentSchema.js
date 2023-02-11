import joi from "joi";

export const rentSchema = joi.object({
    customerId: joi.number().required(),
    gameId: joi.number().uri().required(),
    daysRented: joi.number().min(1).required()
})