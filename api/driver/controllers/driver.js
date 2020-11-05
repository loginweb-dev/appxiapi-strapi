'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    
    async authSocial(ctx) {
        
        let requestBody = {
          username: ctx.request.body.first_name,
          email: ctx.request.body.email,
          password: 'password',
          confirmed: true,
        }

        let user, driver;
  
        // Validation email
        user = await strapi.query('user', 'users-permissions').findOne({ email: requestBody.email });
        
        if(user){
  
          return {
            id: user.id,
            first_name: user.driver.first_name,
            last_name: user.driver.last_name,
            email: user.email,
            codePhone: '+591',
            numberPhone: user.phone,
            avatar: '',
          };
          
        }else{
  
          // Add user
          user = await strapi.query('user', 'users-permissions').create(requestBody);
  
          // Add driver
          let driverBody = {
            first_name: ctx.request.body.first_name,
            last_name: ctx.request.body.last_name,
            user_id: user.id
          }
  
          driver = await strapi.query('driver').create(driverBody);
  
          // Format response
          return {
            id: driver.user_id.id,
            first_name: driver.first_name,
            last_name: driver.last_name,
            email: driver.user_id.email,
            codePhone: '+591',
            numberPhone: driver.user_id.phone,
            avatar: '',
          };
        }
  
    }
};
