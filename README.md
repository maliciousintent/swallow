node-swallow
============

Swallows and rethrows errors in two-args callbacks.

> «if you swallow on the 1st date you're guaranteed a 2nd.» @YouPorn


### Install

    npm -S install node-swallow


### Use

```javascript
var swallow = require('node-swallow');

// ...

fs.readFile('config.json', swallow('while reading configuration file', function (data) {
    // do something with data...
}));

```

If the first argument of the callback is != null then it's rethrown.  
This is useful when you want to avoid handling errors-that-should-never-happen 
or errors that should cause your process to die (e.g.: redis connection errors, database errors,...).


### License

See ```LICENSE```.


