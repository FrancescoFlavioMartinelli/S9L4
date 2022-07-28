import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliComponentComponent } from './dettagli-component/dettagli-component.component';
import { DettagliPageComponent } from './dettagli-page/dettagli-page.component';

const routes: Routes = [
  //Se non ho la pagina /dettagli (senza id) faccio così
  {
      path: 'dettagli/:id',
      component: DettagliComponentComponent
    }
    // Altrimenti è meglio usare i children
    //Se uso questo meccanismo posso navigare alla pagina dettagli/:id solo partendo da /dettagli
    // {
    //   path: 'dettagli',
    //   component: DettagliPageComponent,
    //   children: [
    //     {
    //       path:":id",
    //     component: DettagliComponentComponent
    //   }
    //   ]
    // },
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
