function getTimeFromAngle(angle) {
  // Calculate total minutes
  const totalMinutes = Math.floor(angle * 2);

  // Calculate hours and minutes
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Format hours (handle 12-hour wrap-around)
  const formattedHours = hours === 0 ? 12 : hours;

  // Format minutes to always be two digits
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Return the formatted time
  return `${formattedHours.toString().padStart(2, "0")}:${formattedMinutes}`;
}
