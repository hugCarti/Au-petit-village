import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},

{
    path: 'home',
    component: HomeComponent
},

{
    path: 'about',
    component: AboutComponent
},

{
    path: 'product',
    component: ProductComponent
}];
