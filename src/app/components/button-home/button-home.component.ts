import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-home',
  templateUrl: './button-home.component.html',
  styleUrls: ['./button-home.component.scss'],
})
export class ButtonHomeComponent implements OnInit {
  @Input() textoBotao: string;
  value = "na";
  public options = [
    { value: "on", id: "On" },
    { value: "na", id: "NA" },
    { value: "off", id: "Off" }
  ];
  constructor() { }

  ngOnInit() {}

}
