import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizInfo } from './models/infoquiz';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DateManagerService {

  constructor(private http: HttpClient) { }

  getListQuiz(): Observable<any> {
      return this.http.get(environment.api_url +'/info/infolist');
  }
  getInfobyId(id: string) {
      return this.http.get(environment.api_url + '/info/infobyId/' + id);
  }
}
