import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductdeletionComponent } from './productdeletion/productdeletion.component';
import { ProductinsertionComponent } from './productinsertion/productinsertion.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:RegisterComponent},
  {path:'details',component:DetailsComponent},
  {path:'product', component:ProductComponent,
    children:[
      {path:'',redirectTo:'login', pathMatch:'full'},
      {path:'insert', component:ProductinsertionComponent},
      {path:'delete', component:ProductdeletionComponent},
      {path:'finish',component:FeedbackComponent}
    ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
