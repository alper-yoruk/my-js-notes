// represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// pending: initial state
// fulfilled: operation completed successfully
// rejected: operation failed

// A pending promise can either be fulfilled with a value, or rejected with a reason (error).
// When either of these options happens, the associated handlers queued up by a promise's then method are called.

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

let promise = new Promise(function (resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

// Consumers: then, catch, finally -> async
// ~~~ finally??? ~~~

// Microtask Queue!!!!
