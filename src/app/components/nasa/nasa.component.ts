import {Component, EventEmitter, OnInit} from '@angular/core';
import {NasaService} from '../../services/nasa.service';
import {ApodResponse} from '../../models/apod-response';

@Component({
    selector: 'app-nasa',
    templateUrl: './nasa.component.html',
    styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
    readonly numberOfStartPictures = 4;
    pictureDate = new Date();
    picturesData: ApodResponse[] = [];
    picture: ApodResponse;

    constructor(
        private nasaService: NasaService
    ) {
    }

    ngOnInit(): void {
        this.loadPictures();

    }

    loadPictures(): void {
        for (let i = 1; i <= this.numberOfStartPictures; i++) {
            this.nasaService.getAPOD(this.pictureDate).subscribe(value => {
                if (value.url.includes('youtube')) {
                    return;
                }
                this.picturesData.push(value);
                this.picturesData.sort((a, b) => (a.date < b.date) ? 1 : -1);
            });
            this.pictureDate.setDate(this.pictureDate.getDate() - 1);
        }
    }

    selectedPicture(picture: ApodResponse): void {
        this.picture = picture;
    }

    loadMorePicture(): void {
        this.loadPictures();
    }
}
