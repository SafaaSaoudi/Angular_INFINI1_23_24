import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../Core/Models/residence';
import { Apartment } from '../Core/Models/apartment';
import { ResidenceService } from '../Services/residence.service';
import { ApartmentService } from '../Services/apartment.service';


@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {

  id!:number;
  listResidences!:Residence[]
  listApartments!:Apartment[]
  list:Apartment[]=[];
    
constructor(private actR:ActivatedRoute, private residenceS:ResidenceService, private apartS: ApartmentService){}

ngOnInit(){
this.residenceS.getAllResidences().subscribe(data => this.listResidences=data);
this.apartS.getAllApartments().subscribe(data => this.listApartments=data);


this.id=Number(this.actR.snapshot.paramMap.get('x'));
this.list=this.listApartments.filter((appart:Apartment)=>appart.residence.id==this.id)
}



}
