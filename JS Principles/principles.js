// Thread of execution -> goes through the code line by line and runs / 'executes' each line

// Saves 'data' like strings and arrays so we can use that data later - in it's memory

// Execution context -> created to run the code of a function - has 2 parts; a) thread of execution b) memory

// Call stack
// - JS keeps track of what function is currently running (where's the thread of execution)
// - Run a function - add to call stack
// - Finish running the function - JS removes it from the callstack
// - Whatever is top of the call stack - that's the function we're currently running
