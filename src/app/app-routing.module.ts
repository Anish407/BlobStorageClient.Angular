import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlobstorageComponent } from './blobstorage/blobstorage.component';


const routes: Routes = [
  {path:'blob',component:BlobstorageComponent},
  {path:'*', redirectTo:'blob'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
