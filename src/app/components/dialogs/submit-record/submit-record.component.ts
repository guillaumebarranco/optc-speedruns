import { Component } from '@angular/core';

@Component({
  selector: 'app-submit-record',
  templateUrl: './submit-record.component.html',
  styleUrls: ['./submit-record.component.scss'],
})
export class SubmitRecordComponent {
  public formData = {
    username: '',
    videoUrl: '',
    duration: 0,
  };
}
