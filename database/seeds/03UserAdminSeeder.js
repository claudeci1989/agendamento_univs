'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserAdminSeeder {
  async run() {
    await User.create({
      user_type_id: 2,
      name: 'DTI - Suporte',
      registration: '000000',
      password: 'dtisuporte2020#000000',
    });
    await User.create({
      user_type_id: 2,
      name: 'Everton Pinheiro da Silva',
      registration: '000001',
      password: 'everton2020#000001',
    });
  }
}

module.exports = UserAdminSeeder;
