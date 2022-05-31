'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('maptest')
      .service('myService')
      .getWelcomeMessage();
  },
};
