let yippee = document.querySelector('#test')

yippee.innerHTML = '<em>The To Do List</em>'

let adder = document.querySelector('#adder')
let chore = document.querySelector('#chore')
let part = document.querySelector('#list');
let done = document.querySelector('#done');

let work = function (callback) {
    let more = chore.value;
    callback(more)
};

let build = function (x) {
  if (chore.value.length > 0) {
    part.innerHTML += '<span class="listItem">' + x + '&nbsp;&nbsp;&nbsp;<button class="finish" type="submit">Is it Done?</button><br></span>'
  }
};

let listItem = document.querySelector('.listItem');
let finish = document.querySelector('.finish');



adder.addEventListener('click', function () {
  work(build);
  chore.value = ""
});


finish.addEventListener('click', function () {
  alert('finished')
})
