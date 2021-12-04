import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppartementsComponent } from './appartements/appartements.component';
import { AddAppartementComponent } from './add-appartement/add-appartement.component';
import { UpdateAppartementComponent } from './update-appartement/update-appartement.component';


const routes: Routes = [
  { path: "appartements",component: AppartementsComponent },
  {path: "add-appartement",component: AddAppartementComponent},
  { path: "", redirectTo: "appartements", pathMatch: "full" },
  {path: "updateAppartement/:id", component: UpdateAppartementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
