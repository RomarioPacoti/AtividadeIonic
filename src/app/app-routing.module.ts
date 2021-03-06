import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'veiculos', loadChildren: './veiculos/veiculos.module#VeiculosPageModule' },
  { path: 'modelos', loadChildren: './modelos/modelos.module#ModelosPageModule' },
  { path: 'anos', loadChildren: './anos/anos.module#AnosPageModule' },
  { path: 'consulta', loadChildren: './consulta/consulta.module#ConsultaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
