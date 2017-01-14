# es2015 loop benchmark

I was curious as to whether the new ```js for ( let thing in things )``` structure was much slower than regular or native improved for loops.

In my test the order of speed for looping over an array is:

1. Native improved for loop
2. Regular for loop
3. For-of for loop

Native improved:

```js
for (var i = data.length - 1; i >= 0; i--) {
    storage.push( data[i] )
}
```

Traditional for loop:

```js 
for (var i = 0; i < data.length; i++) {
    storage.push( data[i] )
}
```

For in loop:

```js
for( let thing of data ) {
    storage.push( thing )
}
```

# Do it yourself

To run this test on your machine:

1. Have mocha installed globally ( npm install -g mocha )
2. Clone this repo
3. npm install
4. npm test