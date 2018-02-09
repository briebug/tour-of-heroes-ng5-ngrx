import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../core/models/hero';
import { Sidekick } from '../../core/models/sidekick';

@Component({
  selector: 'my-sidekick-list',
  templateUrl: './sidekick-list.component.html',
  styleUrls: ['./sidekick-list.component.css']
})
export class SidekickListComponent implements OnInit {

  @Input() sidekicks: Sidekick[];
  @Output() sidekickDeletedEvent = new EventEmitter<Sidekick>();
  error: string;

  constructor() { }

  ngOnInit() {
  }

  deleteSidekick(sidekick: Sidekick, event: any): void {
    event.stopPropagation();
    this.sidekickDeletedEvent.emit(sidekick);
    this.error = '';
  }
}
