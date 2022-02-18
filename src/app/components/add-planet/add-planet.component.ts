import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {

  planetForm : FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) { 
    this.planetForm = this.fb.group({
      name: ["", Validators.required],
      cathegory: ["", Validators.required],
      radius: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addplanet(){
    console.log(this.planetForm)

    const PLANET: Planet = {
        name: this.planetForm.get('name')?.value,
        cathegory: this.planetForm.get('cathegory')?.value,
        radius: this.planetForm.get('radius')?.value
    }
    this.toastr.success('PLanet added successful', 'add planet');
    this.router.navigate(["/"]);
  }

}
