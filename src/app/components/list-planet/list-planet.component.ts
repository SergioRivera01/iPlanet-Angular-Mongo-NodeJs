import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/service/planet.service';

@Component({
  selector: 'app-list-planet',
  templateUrl: './list-planet.component.html',
  styleUrls: ['./list-planet.component.css']
})
export class ListPlanetComponent implements OnInit {
  listPlanets: Planet[] = []

  constructor(private _planetService: PlanetService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(){
    this._planetService.getPlanets().subscribe(data => {
      console.log(data);
      this.listPlanets = data;
    }, error => {
      console.log(error);
    }); 
  }

  deletePlanet(id: any){
    this._planetService.deletePlanet(id).subscribe(data => {
      this.toastr.error("PLanet was delete succesful", "Planet delete");
      this.getPlanets();
    }, error => {
      console.log(error)
    })
  }
}
