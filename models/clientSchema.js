import joi from 'joi';
import joiDate from "@joi/date"

const Joi = joi.extend(joiDate)

export const clientSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string().min(10).max(11).pattern(/^[0-9]+$/).required(),
    cpf: joi.string().min(11).max(11).pattern(/^[0-9]+$/),
    birthday: Joi.date().format("YYYY-MM-DD").required()
})