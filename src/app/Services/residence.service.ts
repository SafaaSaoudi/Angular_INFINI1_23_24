import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../Core/Models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  
  urlR = 'http://localhost:3000/residences';
  constructor(private http:HttpClient) { }

  getAllResidences(){
    return this.http.get<Residence[]>(this.urlR);
  }

  getResidenceById(id:number){
    return this.http.get<Residence>(this.urlR+'/'+id);
  }

  addResidence(residence:Residence){
    return this.http.post<Residence>(this.urlR,residence);
  }

  updateResidence(residence:Residence){
    let id=residence.id;
    return this.http.put<Residence>(this.urlR+'/'+id, residence);
  }

  deleteResidence(id:number){
    return this.http.delete<Residence>(this.urlR+'/'+id);
  }



}
