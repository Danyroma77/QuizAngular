import { Component, isDevMode, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DateManagerService } from '../date-manager.service';
import { QuestionSolutionOK } from '../models/qa';

@Component({
  selector: 'db-only-ok',
  templateUrl: './only-ok.component.html',
  styleUrls: ['./only-ok.component.css']
})
export class OnlyOKComponent implements OnInit {
  currentQuiz = null;
  quizElaboration: QuestionSolutionOK[]  ;
  idQuiz: string;

  formB: FormGroup;
  formConfirm: FormGroup;
  listQuiz: any;

  constructor(private route: ActivatedRoute,
    private quizService: DateManagerService,
    private formBuilder: FormBuilder,) {
      this.formB = this.formBuilder.group({
        quizB: ['',Validators.required]
      });
      this.formConfirm = this.formBuilder.group({});
     }

  ngOnInit(): void {
   this.idQuiz= this.route.snapshot.paramMap.get('idQuiz');
   if (this.idQuiz)
   {this.getInfoQuiz();}
   else {this.newSearch();}
   
  }

  getInfoQuiz(){
    this.quizService.getInfobyId(this.idQuiz).subscribe(
      data => {
          this.currentQuiz = data;
          if (isDevMode) console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  requestList() {
    this.quizService.getListQuizIsOkOnly(this.idQuiz).subscribe(
      data => {this.quizElaboration = data;
      console.log(data);},
      error => {console.log(error)}
    );
  }

  newSearch() {
    this.currentQuiz = null;
     this.quizService.getListQuiz().subscribe(
      (data) => {
        this.listQuiz = data;
       if(isDevMode) console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  goToOkList() {
    this.idQuiz= this.formB.value.quizB;
    this.getInfoQuiz();
  }

}
