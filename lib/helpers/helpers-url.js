/**
 * Handlebars URL Helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var url = require('url');
var Utils = require('../utils/utils');


// The module to be exported
var helpers = module.exports = {

  stripQuerystring: function (url) {
    return url.split("?")[0];
  },

  /**
   * {{encodeURI}}
   * Encodes a Uniform Resource Identifier (URI) component
   * by replacing each instance of certain characters by
   * one, two, three, or four escape sequences representing
   * the UTF-8 encoding of the character.
   *
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} uri [description]
   * @return {[type]}     [description]
   */
  encodeURI: function (uri) {
    return encodeURIComponent(uri);
  },

  /**
   * {{decodeURI}}
   * Decodes a Uniform Resource Identifier (URI) component
   * previously created by encodeURIComponent or by a
   * similar routine.
   *
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} encodedURI [description]
   * @return {[type]}            [description]
   */
  decodeURI: function (encodedURI) {
    return decodeURIComponent(encodedURI);
  },

  /**
   * {{urlresolve}}
   * Take a base URL, and a href URL, and resolve them as a
   * browser would for an anchor tag.
   *
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} base [description]
   * @param  {[type]} href [description]
   * @return {[type]}      [description]
   */
  urlresolve: function (base, href) {
    return url.resolve(base, href);
  },

  /**
   * {{urlparse}}
   * Take a URL string, and return an object. Pass true as the
   * second argument to also parse the query string using the
   * querystring module. Defaults to false.
   *
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} path  [description]
   * @param  {[type]} type  [description]
   * @param  {[type]} query [description]
   * @return {[type]}       [description]
   */
  urlparse: function (path, type, query) {
    path = url.parse(path);
    var result = Utils.stringifyObj(path, type, query);
    return Utils.safeString(result);
  }
};

// Export helpers
module.exports.register = function (Handlebars, options) {
  options = options || {};

  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};