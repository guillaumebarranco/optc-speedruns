export function getSpeedrunsByCreatedDate(
  speedruns: any[],
  limit: number
): any[] {
  return Array.from(speedruns)
    .sort((a, b) => {
      if (a.created < b.created) {
        return 1;
      } else if (a.created > b.created) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, limit);
}
