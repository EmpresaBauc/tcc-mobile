import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'pisos',
    loadChildren: () => import('./pisos/pisos.module').then( m => m.PisosPageModule)
  },
  {
    path: 'pintura',
    loadChildren: () => import('./pintura/pintura.module').then( m => m.PinturaPageModule)
  },
  {
    path: 'alvenaria',
    loadChildren: () => import('./alvenaria/alvenaria.module').then( m => m.AlvenariaPageModule)
  },
  {
    path: 'revestimentos',
    loadChildren: () => import('./revestimentos/revestimentos.module').then( m => m.RevestimentosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
