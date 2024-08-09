function timeCalculator(time) {
  //! ms -> min:sec
  const totalSec = time / 1000;
  const min = Math.floor(totalSec / 60);
  let sec = Math.floor(totalSec % 60);
  if (sec < 10) {
    sec = "0" + sec;
  }
  const trackTime = min + ":" + sec;

  return trackTime;
}

export default timeCalculator;
