import { Component, isDevMode, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DateManagerService } from '../date-manager.service';
import { ObjSol, QuestionAndSolution } from '../models/qs';
import { QuestionAnswer } from '../models/quizresult';
import { ResultModalComponent } from '../result-modal/result-modal.component';

@Component({
  selector: 'db-quiztest',
  templateUrl: './quiztest.component.html',
  styleUrls: ['./quiztest.component.css']
})
export class QuiztestComponent implements OnInit {
  currentQuiz = null;
  quizElaboration: QuestionAndSolution[] = null;
  idQuiz: string;

  formB: FormGroup;
  formConfirm: FormGroup;
  listQuiz: any;
  mySolution: QuestionAnswer[] = [];
  idList: string[] = [];
  idQuestion: string[] = [];

  loading = false;
  constructor(private route: ActivatedRoute,
    private quizService: DateManagerService,
    private formBuilder: FormBuilder, private modalService: NgbModal) {
    this.formB = this.formBuilder.group({
      quizB: ['', Validators.required]
    });
    this.formConfirm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.idQuiz = this.route.snapshot.paramMap.get('idQuiz');
    this.idQuestion = [];
    this.idList = [];
    this.mySolution = [];

    if (this.idQuiz) { this.getInfoQuiz(); }
    else { this.newSearch(); }
  }

  getInfoQuiz() {
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

    this.quizElaboration = null;
    this.loading = true;

    this.quizService.getServiceQuiz(this.idQuiz).subscribe(
      data => { this.quizElaboration = data; this.loading = false; },
      error => { console.log(error) }
    );

  }

  responseQuestion(solution: ObjSol) {
    if (this.idQuestion.indexOf(solution.idquestion) === -1) {
      this.mySolution.push(
        {
          idQuestion: solution.idquestion,
          idAnswerSelected: solution.idsol,
          isCorrect: solution.isCorrect
        }
      );
      this.idList.push(solution.idsol);
      this.idQuestion.push(solution.idquestion);
    }
    else {

      let idmodify = this.idQuestion.indexOf(solution.idquestion);
      let idsol = this.idList.indexOf(solution.idsol);
      if (idsol === -1) {
        //this.mySolution
        let AnswerOld = this.mySolution[idmodify].idAnswerSelected;
        let idAnswerOld = this.idList.indexOf(AnswerOld);

        this.idList.splice(idAnswerOld, 1);
        this.idList.push(solution.idsol);
        this.mySolution[idmodify].idAnswerSelected = solution.idsol;
        this.mySolution[idmodify].isCorrect = solution.isCorrect;
        /*
        console.log("lista degli id delle soluzioni => " + this.idList);
        console.log("lista degli id delle domande => " + this.idQuestion);
        console.log("ARRAY COMPLETO => " + this.mySolution);*/
      }
      else {
        this.idList.splice(idsol, 1);
        this.idQuestion.splice(idmodify, 1);
        this.mySolution.splice(idmodify, 1);
      }
    }
    // if (isDevMode) console.log(solution);
  }
  newSearch() {
    this.currentQuiz = null;
    this.quizElaboration = null;
    this.idQuiz = null;

    this.quizService.getListQuiz().subscribe(
      (data) => {
        this.listQuiz = data;
        if (isDevMode) console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  goToOkList() {
    this.idQuiz = this.formB.value.quizB;
    this.getInfoQuiz();
  }

  settingVariables() {
    this.idQuestion = [];
    this.idList = [];
    this.mySolution = [];
    this.quizElaboration = null;
  }
  checkResult(): void {
    // apre la modal
    const modalRef = this.modalService.open(ResultModalComponent);
    modalRef.componentInstance.idQuiz = this.idQuiz;
    modalRef.componentInstance.mySolution = this.mySolution;
    if (isDevMode) console.log(this.mySolution);
    modalRef.result.then(
      () => {
        this.settingVariables();
       if (isDevMode) console.log("CHIUDE IL POPUP - aggiorna i dati");
      },
      () => {
        this.settingVariables();
        if( isDevMode) console.log("ERRRORRR");
      }

    );

    if (isDevMode) console.log(this.mySolution);
  }
}
