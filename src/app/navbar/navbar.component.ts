import { Component, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { DateManagerService } from '../date-manager.service';

@Component({
  selector: 'db-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NgbNavConfig]
})
export class NavbarComponent implements OnInit {

  constructor( config: NgbNavConfig) { 
    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit(): void {


  }

}
