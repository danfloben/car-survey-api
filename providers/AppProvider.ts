import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import SurveyService from 'App/Services/SurveyService'

export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
    this.app.container.singleton('car-survey-api/SurveyService', () => new SurveyService())
  }

  public async boot () {
    // IoC container is ready
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
