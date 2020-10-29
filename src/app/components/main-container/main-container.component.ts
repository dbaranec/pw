import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'app-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

    @ViewChild('mainContainer', {read: ElementRef}) mainContainer: ElementRef;
    @Input() customRightComponent;
    // @ts-ignore
    @Output() atBottomEvent = new EventEmitter();


    constructor() {
    }

    ngOnInit(): void {
    }

    onScroll($event: any): void {
        const element = this.mainContainer.nativeElement;
        const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (atBottom) {
            console.log('som dole');
            this.atBottomEvent.emit($event);
        }
    }
}
