import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {

  planetForm : FormGroup;

  constructor(private fb: FormBuilder) { 
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
  }

}
