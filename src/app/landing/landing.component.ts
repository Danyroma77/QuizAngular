import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateManagerService } from '../date-manager.service';
import { QuizInfo } from '../models/infoquiz';

@Component({
  selector: 'db-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  listQuiz: any;
  formA: FormGroup;
  formB: FormGroup;
  formC: FormGroup;

  constructor(
    private infoQuizService: DateManagerService,
    private formBuilder: FormBuilder
  ) { 


    this.formA = this.formBuilder.group({
      quizA: ['', Validators.required]
    });
    this.formB = this.formBuilder.group({
      quizB: ['',Validators.required]
    });
    this.formC = this.formBuilder.group({
      quizC: ['', Validators.required]
    });

  }

  ngOnInit(): void {

    // prelevo le informazioni dal service
    this.infoQuizService.getListQuiz().subscribe(
      (data) => {
        this.listQuiz = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
