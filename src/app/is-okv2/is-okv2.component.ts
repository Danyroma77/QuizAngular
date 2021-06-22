import { Component, isDevMode, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DateManagerService } from '../date-manager.service';
import { QuestionSolutionOK } from '../models/qa';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'db-is-okv2',
  templateUrl: './is-okv2.component.html',
  styleUrls: ['./is-okv2.component.css']
})
export class IsOKV2Component implements OnInit {

  currentQuiz = null;
  quizElaboration: QuestionSolutionOK[]  ;
  idQuiz: string;

  formB: FormGroup;
  formConfirm: FormGroup;
  listQuiz: any;
  loading: boolean;
  page: number = 1;
  pageSize = 100;
  total = 4999;
  totalPage = Math.round( this.total / this.pageSize);

  movePage(e) {
    console.log("EVENTO =>" + JSON.stringify( e));
    this.quizElaboration = null;
    switch ( e)
    {
      case 'first':
        {this.page=1;
          break;}
        case 'pre':
          {
            if (this.page>1) this.page= this.page-1;
            break;}
        case 'post':
          {
            if (this.page<this.totalPage) this.page = this.page+1;
            break;}
        case 'last':
          {
            this.page = this.totalPage;
            break;}
    }
    this.requestList();
  
  }
  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
   goToPage(selectpage) {

    if ((selectpage>1)&&(selectpage<this.totalPage))
    {
        this.page = selectpage;
    }
    this.requestList();
   }
  

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
    this.loading = true;
this.quizElaboration= null;
    this.quizService.getPagination(this.idQuiz, this.page-1).subscribe(
      data => {
        this.quizElaboration = data;
        this.loading=false;
        if (isDevMode) console.log(data);
      },
      error => {console.log(error)}
    );
  }

  newSearch() {
    this.currentQuiz = null;
    this.quizElaboration = null;
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
