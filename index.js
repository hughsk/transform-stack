var slice  = require('sliced')
var prefix = require('vendor-prefix')
var once   = require('once')

var trKey  = prefix('transform')
var idKey = Math.random()

module.exports = createStack

function createStack(node) {
  if (node[idKey]) return node[idKey]

  var style = node.style

  return (
    node[idKey] =
    push.push =
    push
  )

  function push(rule) {
    if (!arguments.length) return getRules()

    var rules = getRules()

    rules.push(rule)
    setRules(rules)

    // Chrome et al reformat your transform
    // values for "consistency" – so just in case,
    // check for the newly formatted version instead.
    rule = getRules().pop()

    remove = once(remove)
    remove.pop = remove
    return remove

    function remove() {
      var rules = getRules()
      var idx = rules.indexOf(rule)
      if (idx === -1) return

      rules.splice(idx, 1)
      setRules(rules)
    }
  }

  function getRules() {
    return style[trKey].match(
      /[^\s\(]+\([^)]+\)/g
    ) || []
  }

  function setRules(rules) {
    return style[trKey] = rules.join(' ')
  }
}

function getTransformKey() {
  return 'webkitTransform'
}
