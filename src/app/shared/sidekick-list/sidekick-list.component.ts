import { Component, Input, OnInit } from '@angular/core';
import { Sidekick } from '../../core/models/sidekick';

@Component({
  selector: 'my-sidekick-list',
  templateUrl: './sidekick-list.component.html',
  styleUrls: ['./sidekick-list.component.css']
})
export class SidekickListComponent implements OnInit {

  @Input() sidekicks: Sidekick[];

  constructor() { }

  ngOnInit() {
  }

}
