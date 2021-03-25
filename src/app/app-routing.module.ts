import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';

const routes: Routes = [
    { path: '', component: PlayGroundComponent },
    { path: 'login', component: LoginComponent },
    { path: 'poke-detail/:index', component: PokeDetailComponent },
    // { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
