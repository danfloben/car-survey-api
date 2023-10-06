import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";
import { schema } from '@ioc:Adonis/Core/Validator'
import Survey from "App/Models/Survey";

export default class SurveysController {

    public async index({ response }: HttpContextContract) {
        const surveys = await Survey.all()
        return response.ok(surveys)
    }

    public async show({ params, response }) {
        const { id }: { id: Number } = params

        const survey: any = await Survey.find(id)
        if (!survey) {
            return response.notFound({ message: 'Survey not found' })
        }

        return response.ok(survey)
    }

    public async store({ request, response }: HttpContextContract) {

        const surveySchema = schema.create({
            userId: schema.number(),
            carModel: schema.number(),
            factorId: schema.number(),
            driveRate: schema.number(),
            satisfactionRate: schema.number(),
            
        })
        const payload: any = await request.validate({ schema: surveySchema })
        const survey: Survey = await Survey.create(payload)

        if (survey) {
            Logger.info({ SurveyId: survey.id }, `Survey created successfully`);
            return survey;
        }
        Logger.info({ Survey: survey }, `Survey not created`);
        return response.ok(survey)
    }

    public async update({ request, params, response }) {

        const surveySchema = schema.create({
            userId: schema.number(),
            carModel: schema.number(),
            factorId: schema.number(),
            driveRate: schema.number(),
            satisfactionRate: schema.number(),
            
        })

        const payload: any = await request.validate({ schema: surveySchema })

        const { id }: { id: Number } = params

        const survey: any = await Survey.find(id)
        if (!survey) {
            return response.notFound({ message: 'Survey not found' })
        }

        survey.userId = payload.userId
        survey.carModel = payload.carModel
        survey.factorId = payload.factorId
        survey.driveRate = payload.driveRate
        survey.satisfactionRate = payload.satisfactionRate

        await survey.save()

        return response.ok(survey)
    }

    public async destroy({ params, response }) {
        const { id }: { id: Number } = params

        const survey: any = await Survey.find(id)
        if (!survey) {
            return response.notFound({ message: 'Survey not found' })
        }

        await survey.delete()

        return response.ok({ message: 'Survey deleted successfully.' })
    }
}
