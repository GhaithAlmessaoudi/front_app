import { ModalPageComponent } from './modal-page/modal-page.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'addtopics', component: AddTopicsComponent },
  { path: 'topicform', component: ModalPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
