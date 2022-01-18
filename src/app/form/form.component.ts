import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../services/form.service";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  public form: FormGroup;

  public musicTypes: any [] = [
    {value: 'Pop', label: 'Pop'},
    {value: 'Classic', label: 'Clásica'},
    {value: 'Rock', label: 'Rock'},
    {value: 'Jazz', label: 'Jazz'}];


  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private _router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      typeMusic: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public summit(): void {

    if(this.form.invalid){
      return;
    }

    const body = {
      name: this.form.controls['name'].value,
      email: this.form.controls['email'].value,
      musicType: this.form.controls['typeMusic'].value
    }

    this._formService.createForm(body).subscribe(
      res => {
        console.log(res);
        if(res.data.ok) {
          Swal.fire({
            icon: 'success',
            title: '¡Exito!',
            text: res.data.message,
          });
          this._router.navigate(["/details"]);
        }else {
          Swal.fire({
            icon: 'warning',
            title: '¡Alerta!',
            text: res.data.message,
          });
        }
      },
      e=> {
        console.log(e);
      }
    );

  }

  public cleanForm():void {
    this.form.reset();
  }

}
