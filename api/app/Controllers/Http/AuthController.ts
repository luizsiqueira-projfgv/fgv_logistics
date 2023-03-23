import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async register({}: HttpContextContract) {}

  public async login({auth, request, response}: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch (error) {
      return response.unauthorized('Invalid Credentials')
    }
  }

  public async forgot({}: HttpContextContract) {}

  public async recover({}: HttpContextContract) {}

  public async logout({auth, response}: HttpContextContract) {
    await auth.use('api').logout()
    response.redirect('/auth/login')
  }

}
