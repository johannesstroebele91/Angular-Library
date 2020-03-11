import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontendComponent} from './pages/frontend/frontend.component';
import {BackendComponent} from './pages/backend/backend.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'page1', component: FrontendComponent},
  {path: 'page2', component: BackendComponent},
  {path: 'page3', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
