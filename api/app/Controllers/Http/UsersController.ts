import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    try {
      const users = await User.all()
      if(users != null) return users
      else return null
    } catch (error) {
      
    }
  }

  public async store({request}: HttpContextContract) {
    const = require.only(["", ""])
    const user = await User.create({})
     return user
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
