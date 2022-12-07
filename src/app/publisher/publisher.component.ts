import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit {

  message!: string;

  constructor(private service: SharedService) { }

  ngOnInit() {
  }

  newMessage() {
    this.service.changeMessage(this.message);
  }

}
