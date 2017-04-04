import {AfterViewInit, Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-sample-content',
  templateUrl: './sample-content.component.html',
  styleUrls: ['./sample-content.component.scss']
})
export class SampleContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('input').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass: 'iradio_flat-green'
    });
  }

}
