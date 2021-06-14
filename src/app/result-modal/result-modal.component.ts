import { Component, Input, isDevMode, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DateManagerService } from '../date-manager.service';
import { QuestionAnswer } from '../models/quizresult';

@Component({
  selector: 'db-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.css']
})
export class ResultModalComponent implements OnInit {
  @Input() mySolution: QuestionAnswer[];
  @Input() idQuiz: string;
  currentQuiz = null;
  isOK: number = 0;
  isError: number = 0;
  total: number = 0;
  noAnswer: number = 0;

  constructor(public activeModal: NgbActiveModal, private quizService: DateManagerService,) { }

  ngOnInit(): void {
    this.getInfoQuiz();
   
  }

  checkStatus() {
     this.noAnswer = this.total;
    if (this.mySolution.length > 0) {
      
      this.mySolution.forEach((qa, index) => {

        if (qa.isCorrect === 0) {
          this.isError = this.isError + 1;
        }
        else {
          this.isOK = this.isOK + 1;
        } 
        this.noAnswer = this.noAnswer - 1;
        //console.log("no risp => " + this.noAnswer);
      });
    }
    else {
      this.isError = 0;
      this.isOK = 0;
    }

  }

  getInfoQuiz() {
    this.quizService.getInfobyId(this.idQuiz).subscribe(
      data => {
        this.currentQuiz = data;
        this.total = this.currentQuiz.numQuizAtTime;
        this.checkStatus();
        //console.log("TOTALE => " + this.total + " no risposte => " + this.noAnswer);
        if (isDevMode) console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
