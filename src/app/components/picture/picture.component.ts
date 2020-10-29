import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApodResponse} from '../../models/apod-response';

@Component({
    selector: 'app-picture',
    templateUrl: './picture.component.html',
    styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

    @Input() picture: ApodResponse;
    @Output() showDetail = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    showDetailComponent(): void {
       this.showDetail.emit(this.picture);
    }
}
