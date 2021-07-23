import { Component, OnInit } from '@angular/core';
import { DateManagerService } from '../date-manager.service';
import { Pageinfo } from '../models/pageinfo';

@Component({
  selector: 'db-info-app',
  templateUrl: './info-app.component.html',
  styleUrls: ['./info-app.component.css']
})
export class InfoAPPComponent implements OnInit {
  infoAPP$: Pageinfo;

  constructor(private dataService: DateManagerService) { }

  ngOnInit(): void {
    this.dataService.getInfo().pipe().subscribe(
      (data) => {
          this.infoAPP$ = data;
              console.log("---" + JSON.stringify( data));

        }
        ,
      (error) => console.log(error.message)
    );
  }

}
