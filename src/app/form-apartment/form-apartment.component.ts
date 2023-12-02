import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent {

apartForm= new FormGroup({
  id: new FormControl(''),
  appartNum: new FormControl('', [Validators.required, Validators.min(1)]),
  floorNum: new FormControl(''),
  surface: new FormControl(''),
  terrace: new FormControl(''),
  surfaceTerrace: new FormControl(''),
  category: new FormControl(''),
  description: new FormControl(''),
  residence: new FormControl('')
});
id!:any;
constructor(private actR:ActivatedRoute){}

ngOnInit(){
  this.id=Number(this.actR.snapshot.paramMap.get('id'));
  this.apartForm.patchValue({residence:this.id});
}
get appartNum(){
  return this.apartForm.get('appartNum');
}
}
