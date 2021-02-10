export interface Leaderboard {
  name: string;
  id: string;
  category?: string;
  icon: string;
  leaderboards?: Leaderboard[];
}
