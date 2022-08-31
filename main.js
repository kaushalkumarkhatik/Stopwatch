let [millisec, sec, min, hr] = [0, 0, 0, 0];

let time_ref = document.querySelector('.display');

let int = null;

document.getElementById('start').addEventListener('click', () => {
  if (int !== null) {
    clearInterval(int)
  }

  int = setInterval(display_time, 10)

})

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(int)
})



document.getElementById('reset_btn').addEventListener('click', () => {

  clearInterval(int);
  [millisec, sec, min, hr] = [0, 0, 0, 0];
  time_ref.innerHTML = '00 : 00 : 00 : 000 ';

})

function display_time() {
  millisec += 10
  if (millisec == 1000) {
    millisec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
      if (min == 60) {
        min = 0
        hr++
      }

    }
  }

  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;

  let ms = millisec < 10 ? "00" + millisec : millisec < 100 ? "0" + millisec : millisec;

  time_ref.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}