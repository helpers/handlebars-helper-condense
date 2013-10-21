/**
 * Collapse multiple new lines into one.
 * @param {none}
 * @example:
 *   {{#condense}}
 *     {{> body }}
 *   {{/condense}}
 */

module.exports.register = function(Handlebars, options) {
  var assembleOptions = options;

  Handlebars.registerHelper('condense', function(context) {
    var content = context.fn(this);
    // reduce multiple newlines to a single newline
    if(assembleOptions.condense === true) {
      content = content.replace(/(\n|\r){2,}/g, '\n').replace(/(\s*<!--)/g, '\n$1');
    }
    return content;
  });
};