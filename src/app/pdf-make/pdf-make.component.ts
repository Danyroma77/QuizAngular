import { Component, isDevMode, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DateManagerService } from '../date-manager.service';

@Component({
  selector: 'db-pdf-make',
  templateUrl: './pdf-make.component.html',
  styleUrls: ['./pdf-make.component.css']
})
export class PdfMakeComponent implements OnInit {

  currentQuiz = null;
  quizElaboration = null;
  idQuiz: string;

  formC: FormGroup;
  formConfirm: FormGroup;
  listQuiz: any;

  constructor(private route: ActivatedRoute,private quizService: DateManagerService,
    private formBuilder: FormBuilder,) {

      this.formC = this.formBuilder.group({
        quizC: ['', Validators.required]
      });

      this.formConfirm = this.formBuilder.group({});
     }

  ngOnInit(): void {this.idQuiz= this.route.snapshot.paramMap.get('idQuiz');
  if (this.idQuiz)
  {this.getInfoQuiz();}
  else {this.newSearch();}
  }
  goToPdfCreator() {
    this.idQuiz = this.formC.value.quizC;
    this.getInfoQuiz();
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
  requestList() {
    this.quizService.getPdf(this.idQuiz).subscribe(
      data => {
        let blob = data;
        var fileURL = URL.createObjectURL(blob);
        window.open(fileURL)
      
      },
        error => {
          console.log(error);
        }
    );
  }
}
