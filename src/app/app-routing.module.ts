import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ExploreComponent } from './explore/explore.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { SingleProdComponent } from './explore/single-prod/single-prod.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DeleteprodComponent } from './admin/deleteprod/deleteprod.component';
import { EditprodComponent } from './admin/editprod/editprod.component';


const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'catagories',component:CatagoriesComponent},
 {path:'explore',component:ExploreComponent},
 {path:'admin',component:AdminComponent},
 {path:'dashboard',component:AdminDashboardComponent},
 {path:'addProduct/:pid',component:AddProductComponent},
 {path:'deleteprod',component:DeleteprodComponent},
 {path:'editprod',component:EditprodComponent},
{path:'addProduct',component:AddProductComponent},
 {path:'singleprod/:id',component:SingleProdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
