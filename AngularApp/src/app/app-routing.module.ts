import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayStudentsComponent, InsertStudentComponent } from './views';
import { StudentsResolver } from './resolvers';

const routes: Routes = [

  {
    path: 'students/display',
    component: DisplayStudentsComponent,
    data: {
      title: 'Student List'
    },
    resolve: {
      dataList: StudentsResolver
    }
  },
  {
    path: 'students/insert',
    component: InsertStudentComponent,
    data: {
      title: 'Insert Student'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
