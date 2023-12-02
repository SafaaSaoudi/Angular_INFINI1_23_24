import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'residences', pathMatch:'full'}, 
  {path:'residences', component:ResidencesComponent},
  {path:'addresidence', component:FormResidenceComponent},
  {path:'detailsRsidence/:x', component:ApartmentsComponent},
  {path:'addApartment/:id', component:FormApartmentComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
