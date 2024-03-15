import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Axiliary-Tables',loadChildren: () => import('./auxiliary-tables/auxiliary-tables.module').then(m => m.AuxiliaryTablesModule)},
  {path: 'Categorys',loadChildren: () =>       import('./categorys/categorys.module').then(m => m.CategorysModule)},
  {path: 'Products',loadChildren: () =>        import('./products/products.module').then(m => m.ProductsModule)},
  {path: 'Profiles',loadChildren: () =>        import('./profiles/profiles.module').then(m => m.ProfilesModule)},
  {path: 'Users',loadChildren: () =>           import('./users/users.module').then(m => m.UsersModule)},
  {path: 'Options-Menu',loadChildren: () =>           import('./options-menu/options-menu.module').then(m => m.OptionsMenuModule)},
  {path: 'Brands',loadChildren: () =>           import('./brands/brands.module').then(m => m.BrandsModule)},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
