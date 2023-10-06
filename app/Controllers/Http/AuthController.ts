import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    try {
      const email = request.input("email");
      const password = request.input("password");
      const token = await auth.use("api").attempt(email, password, {
        expiresIn: "8hours",
      });
      return token.toJSON();
    } catch (error) {
      return response.status(401).json({
        message: error.message,
      });
    }

  }

  public async register({ request, response }: HttpContextContract) {
    try {
      
      const validations = await schema.create({
        email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
        password: schema.string(),
      })

      const data = await request.validate({ schema: validations })
      const user = await User.create(data)
      return response.created(user)

    } catch (error) {
      return response.status(401).json({
        message: error.message,
      });
    }
  }
}