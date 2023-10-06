import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import Factor from "App/Models/Factor";
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class FactorsController {

    public async index({ response }: HttpContextContract) {
        const factors = await Factor.all()
        return response.ok(factors)
    }

    public async show({ params, response }) {
        const { id }: { id: Number } = params

        const factor: any = await Factor.find(id)
        if (!factor) {
            return response.notFound({ message: 'Factor not found' })
        }

        return response.ok(factor)
    }

    public async store({ request, response }: HttpContextContract) {
        const factorSchema = schema.create({
            title: schema.string({ trim: true }, [
                rules.maxLength(255)
            ])
        })
        const payload: any = await request.validate({ schema: factorSchema })
        const factor: Factor = await Factor.create(payload)

        if (factor) {
            Logger.info({ FactorId: factor.id }, `Factor created successfully`);
            return factor;
        }
        Logger.info({ Factor: factor }, `Factor not created`);
        return response.ok(factor)
    }

}
