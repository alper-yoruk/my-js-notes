// JavaScript is
// - single threaded (one command runs at a time)
// - synchronously executed (each line is run in order the code appears)

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 0);
console.log("i am here");

// then - to onFulfillment - hidden propery

// async in front of a func -> func returns a promise
async function f() {
  return 1;
}
console.log(f);

// await -> wait until promise settles and return its result

// async function showAvatar() {
//   // read our JSON
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();

//   // read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // show the avatar
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();
