import {Component, Input, OnInit} from '@angular/core';
import {ApodResponse} from '../../models/apod-response';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() pictureData: ApodResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
