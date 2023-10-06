
declare module '@ioc:car-survey-api/SurveyService' {
    import SurveyInterface from 'Contracts/interfaces/SurveyInterface'
    import Survey from 'App/Models/Survey'
    const SurveyService: SurveyInterface<Survey>
    export default SurveyService
}