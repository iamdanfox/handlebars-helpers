/**
 * Tests: i18n Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

require('should');
var Handlebars = require('handlebars');
require('../../lib/helpers/helpers-i18n').register(Handlebars, {});

var context = {
  language: "en",
  en: {
    key: "value"
  },
  fr: {
    key: "valeur"
  }
};

describe('i18n', function () {
  describe('{{urlresolve base href}}', function () {
    it('should take a key and return for the default language', function () {
      var source, template;
      source = '{{#i18n "key"}}{{/i18n}}';
      template = Handlebars.compile(source);
      template(context).should.equal("value");
    });
    it('should take a key and return for the override language', function () {
      var source, template;
      source = '{{#i18n "key" language="fr"}}{{/i18n}}';
      template = Handlebars.compile(source);
      template(context).should.equal("valeur");
    });
  });
});
