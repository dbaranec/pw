import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DatePipe} from '@angular/common';
import {ApodResponse} from '../models/apod-response';

@Injectable({
    providedIn: 'root'
})
export class NasaService {

    url = 'https://api.nasa.gov/planetary/';
    apiKey = 'kpl5NEcRFuYfkXn0QVhQ0led7nABxQroNn03WB5e';

    constructor(
        private http: HttpClient,
        private datepipe: DatePipe
    ) {
    }

    getAPOD(date: Date): Observable<ApodResponse> {
      const stringDate = this.datepipe.transform(date, 'yyyy-MM-dd');
      let params = new HttpParams();
      params = params.set('api_key', this.apiKey);
      params = params.set('date', stringDate);
      params = params.set('hd', 'true');
      return this.http.get<ApodResponse>(`${this.url + 'apod?' + params.toString()}`);
    }

}
