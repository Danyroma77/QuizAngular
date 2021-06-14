import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuestionSolutionOK } from './models/qa';
import { QuestionAndSolution } from './models/qs';

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

  getListQuizIsOkOnly(id: string) {
    return this.http.get<QuestionSolutionOK[]>(environment.api_url + '/qa/isokonly/' + id);
  }

  getPdf(id: string) {
    const httpOptions = {
      responseType: 'blob' as 'json',
      };
    return this.http.get<Blob>(environment.api_url+ '/qa/pdf/' + id, httpOptions);
  }

  getServiceQuiz(id:string) {
    return this.http.get<QuestionAndSolution[]>(environment.api_url + '/qa/quizsimple/' + id );
  }

}
