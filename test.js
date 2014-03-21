var test = require('prova')
if (!process.browser) return
var tr = require('./')

test('simple', function(t) {
  var push = tr(document.body)
  var pop  = push('translate(50px, 0px)')

  t.plan(2)
  t.deepEqual(push(), ['translate(50px, 0px)'])
  pop()
  t.deepEqual(push(), [])
})
