import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApartmentService } from '../Services/apartment.service';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent {

apartForm= new FormGroup({
  id: new FormControl(),
  appartNum: new FormControl('', [Validators.required, Validators.min(1)]),
  floorNum: new FormControl('',Validators.required),
  surface: new FormControl('',Validators.required),
  terrace: new FormControl(''),
  surfaceTerrace: new FormControl(''),
  category: new FormControl(''),
  description: new FormControl(''),
  residence: new FormControl('')
});
id!:any;
idApart!:Number;
constructor(private actR:ActivatedRoute, private aparS:ApartmentService){}

ngOnInit(){
  this.id=Number(this.actR.snapshot.paramMap.get('id'));
  this.apartForm.patchValue({residence:this.id});
  this.aparS.getAllApartments().subscribe((data) => {this.idApart=data.length+1;
  this.apartForm.patchValue({id:this.idApart})});
  
}
get apartNum() { return this.apartForm.get('appartNum'); }
get floorNum() { return this.apartForm.get('floorNum'); }
get surface() { return this.apartForm.get('surface'); }
get surfaceTerrace() { return this.apartForm.get('surfaceTerrace'); }
get terrace() { return this.apartForm.get('terrace'); }
get category() { return this.apartForm.get('category'); }
get description() { return this.apartForm.get('description'); }
get residence() { return this.apartForm.get('residence'); }


addApart(){
  console.log(this.apartForm.value);
//this.aparS.addApartment().subscribe();
}
}
