export function getDurationFromTimestamp(duration: number): string {
  let seconds: any = duration % 60;
  let minutes: any = (duration - seconds) / 60;

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return `${minutes}m ${seconds}s`;
}
