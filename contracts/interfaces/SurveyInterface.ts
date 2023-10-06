import Survey from "App/Models/Survey"

export default interface SurveyInterface<T> {
    show(id: Number): any
    store(survey: T): Promise<T>
    update(survey: any): Survey
    destroy(id: Number): any
}