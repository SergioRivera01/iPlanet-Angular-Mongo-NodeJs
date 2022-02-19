import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/service/planet.service';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {

  planetForm : FormGroup;
  titulo = "Add planet";
  id: string |null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _planetService: PlanetService,
              private aRouter: ActivatedRoute) { 
    this.planetForm = this.fb.group({
      name: ["", Validators.required],
      cathegory: ["", Validators.required],
      radius: ["", Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.isEdit();
  }

  addplanet(){
       const PLANET: Planet = {
        name: this.planetForm.get('name')?.value,
        cathegory: this.planetForm.get('cathegory')?.value,
        radius: this.planetForm.get('radius')?.value
    }

    if(this.id !== null) {
      //Editamos planeta
      this._planetService.editPlanet(this.id, PLANET).subscribe(data => {
        this.toastr.info('Planet edited successful', 'edit planet');
        this.router.navigate(["/"]);
      }, error => {
        console.log(error)
        this.planetForm.reset();
      })
    }else{
      //agregamos planeta
      console.log(PLANET);
      this._planetService.addPlanet(PLANET).subscribe(data => {
      this.toastr.success('Planet added successful', 'add planet');
      this.router.navigate(["/"]);
    }, error => {
      console.log(error)
      this.planetForm.reset();
    })
    }
  } 

  isEdit(){
    if (this.id !== null) {
      this.titulo = "Edit Planet"
      this._planetService.getPLanetbyId(this.id).subscribe(data =>{
        this.planetForm.setValue({
          name: data.name,
          cathegory: data.cathegory,
          radius: data.radius})
      })
    }
  }

}
