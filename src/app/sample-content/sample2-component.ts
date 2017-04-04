import {Component, OnInit} from '@angular/core';
@Component({
  template: `<h1>Doctor Database</h1>
  <div class="row">
    <div class="col-sm-6">
      <panel>
        <panel-title>Doctor Details</panel-title>
        <h4>App Usage across versions</h4>
      </panel>
    </div>
    <div class="col-sm-6">
      <panel>
        <panel-title>Clinic Details</panel-title>
        <h4>App Usage across versions</h4>
        <label>
          <input iCheck type="checkbox"><span style="margin-left: 10px;">Test</span>
        </label>
      </panel>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6">
      <panel [showCollapseButton]="false">
        <panel-title>Doctor Details</panel-title>
        <h4>App Usage across versions</h4>
      </panel>
    </div>
    <div class="col-sm-6">
      <panel>
        <panel-title>Doctor Details</panel-title>
        <h4>App Usage across versions</h4>
      </panel>
    </div>
  </div>`

})
export class Sample2Component {
}
