import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './features/main-screen/main-screen.component';

const routes: Routes = [
  {path:'',component: MainScreenComponent},
  // {path:'/',component: MainScreenComponent},
  // {path:'/',component: MainScreenComponent},
  // {path:'/',component: MainScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
