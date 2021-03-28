import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: 'pokemon', component: PlayGroundComponent, canActivate: [AuthGuard] },
  { path: 'pokemon/detail/:id', component: PokeDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  // { path: 'poke-detail/:index', component: PokeDetailComponent },
  { path: '**', redirectTo: 'pokemon' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
