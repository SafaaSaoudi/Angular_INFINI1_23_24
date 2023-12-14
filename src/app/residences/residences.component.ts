import { Component } from '@angular/core';
import { Residence } from '../Core/Models/residence';
import { Apartment } from '../Core/Models/apartment';
import { ResidenceService } from '../Services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences!:Residence[];
  listApartments!:Apartment[];
  list:Apartment[]=[];

  constructor(private residenceS:ResidenceService) { }

  ngOnInit(): void {
    this.residenceS.getAllResidences().subscribe(data => this.listResidences=data);
  }

    showApartment(id:number){
      this.list=this.listApartments.filter((appart:Apartment)=>appart.residence.id==id)
    }

    deletResidence(residence:Residence){
      // let index=this.listResidences.indexOf(residence);
      // this.listResidences.splice(index,1);
      this.residenceS.deleteResidence(residence.id).subscribe(()=>
        this.residenceS.getAllResidences().subscribe(data => this.listResidences=data)
      );
    }

}
