import { Component, OnInit } from '@angular/core';
import { Appartement } from '../model/appartement.model';
import { AppartementService } from '../service/appartement.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html'

})
export class AddAppartementComponent implements OnInit {
  newAppartement = new Appartement();

  constructor(private appartementService: AppartementService ,
    private router :Router
    ) {

  }

  ngOnInit(): void {
  }

  addAppartement() {
    this.appartementService.ajouterAppartement(this.newAppartement).subscribe(prod => {
      console.log(prod);
    });
    this.router.navigate(['appartements']);


  }

}
