import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-leaderboard-item',
  templateUrl: './leaderboard-item.component.html',
  styleUrls: ['./leaderboard-item.component.scss'],
})
export class LeaderboardItemComponent {
  @Output() public openLeaderboard = new EventEmitter();

  @Input() item: any;

  public _openLeaderboard(item: any): void {
    this.openLeaderboard.emit(item);
  }

  public get _imgSize(): number {
    if (this.item.size) {
      return this.item.size === 'small' ? 40 : 100;
    }

    return 100;
  }
}
