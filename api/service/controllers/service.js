'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async createCustomer(ctx) {

    let body = {
      direction: ctx.request.body.direction,
      location: ctx.request.body.location,
      customer: ctx.request.body.customer,
      latitude: ctx.request.body.latitude,
      longitude: ctx.request.body.longitude,
      favorite: ctx.request.body.favorite,
      store: ctx.request.body.store
    }

    let customer_location = await strapi.query('customer-location').create(body);
    return customer_location;
  }
};
