import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AccountsController {
  public async register({}: HttpContextContract) {}

  public async login({}: HttpContextContract) {}

  public async forgot({}: HttpContextContract) {}

  public async recover({}: HttpContextContract) {}
}
