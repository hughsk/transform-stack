# transform-stack [![Flattr this!](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=hughskennedy&url=http://github.com/hughsk/transform-stack&title=transform-stack&description=hughsk/transform-stack%20on%20GitHub&language=en_GB&tags=flattr,github,javascript&category=software)[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Add/remove individual transformations from a DOM node's CSS transform style,
with the hopes of minimising interference with other transforms being applied
from other parts of your code.

## Usage ##

[![transform-stack](https://nodei.co/npm/transform-stack.png?mini=true)](https://nodei.co/npm/transform-stack)

### push = transform(node) ###

Create a new transform stack for `node`.

### pop = push(value) ###

Appends a new transform operation of `value` to the node's *transform* style.
This should just be a string, e.g. `translate(50px, 0)`.

Returns a `pop` function, which you can use to remove the transform later.

### pop() ###

Removes the previously applied transform. *Note: if you have two transforms
of *exactly* the same type and values, you may run into issues with transform
order.*

### push() ###

When calling `push` with no arguments, you will be given an array in return
that contains each transform in the stack, e.g.:

``` javascript
[
    "translate(50px, 0)"
  , "rotate(45deg)"
  , "scale(0.5, 0.5)"
]
```

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/transform-stack/blob/master/LICENSE.md) for details.
