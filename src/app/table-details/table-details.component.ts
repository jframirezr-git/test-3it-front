import { Component, OnInit } from '@angular/core';
import {FormService} from "../services/form.service";
import { Router} from "@angular/router";


@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnInit {

  public data: any;

  constructor(
    private _formDetails: FormService,
    private _router: Router
  ) {

    this._formDetails.getFormDetails().subscribe(
      res=>{
        console.log(res.data);
        this.data = {
          rock: res.data.rockNumber,
          pop: res.data.popNumber,
          classic: res.data.classicNumber,
          jazz: res.data.jazzNumber
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  ngOnInit(): void {
  }


  public back():void {
    this._router.navigate(["/home"]);
  }

}
