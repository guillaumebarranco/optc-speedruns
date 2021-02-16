import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetSpeedrunsAction } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _store: Store) {}

  public ngOnInit(): void {
    this._getScores();
  }

  private _getScores(): void {
    this._store.dispatch(new GetSpeedrunsAction());
  }
}
