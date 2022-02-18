import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';

//Componentes
import { ListPlanetComponent } from './components/list-planet/list-planet.component';

const routes: Routes = [
  {path: "", component: ListPlanetComponent},
  {path: "add-planet", component: AddPlanetComponent},
  {path: "edit-planet/:id", component: AddPlanetComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
