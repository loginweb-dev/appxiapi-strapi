'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

  
module.exports = {
    async index(ctx) {
      return 'Hello World!';
    },
    async authSocial(ctx) {

      let requestBody = {
        username: ctx.request.body.first_name,
        email: ctx.request.body.email,
        password: 'password',
        confirmed: true,
      }
      let user, customer;

      // Validation email
      user = await strapi.query('user', 'users-permissions').findOne({ email: requestBody.email });

      if(user){

        return {
          id: user.id,
          first_name: user.customer.first_name,
          last_name: user.customer.last_name,
          email: user.email,
          codePhone: '+591',
          numberPhone: user.phone,
          avatar: '',
        };
        
      }else{

        // Add user
        user = await strapi.query('user', 'users-permissions').create(requestBody);

        // Add customer
        let customerBody = {
          first_name: ctx.request.body.first_name,
          last_name: ctx.request.body.last_name,
          user_id: user.id
        }

        customer = await strapi.query('customer').create(customerBody);

        // Format response
        return {
          id: customer.user_id.id,
          first_name: customer.first_name,
          last_name: customer.last_name,
          email: customer.user_id.email,
          codePhone: '+591',
          numberPhone: customer.user_id.phone,
          avatar: '',
        };
      }

    },
};
