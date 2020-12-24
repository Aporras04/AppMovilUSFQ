import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'first-time',
    loadChildren: () => import('./first-time/first-time.module').then( m => m.FirstTimePageModule)
  },
  {
    path: 'reset-pswd',
    loadChildren: () => import('./reset-pswd/reset-pswd.module').then( m => m.ResetPswdPageModule)
  },
  {
    path: 'user-profile/:id',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'tutor-profile/:id',
    loadChildren: () => import('./tutor-profile/tutor-profile.module').then( m => m.TutorProfilePageModule)
  },
  {
    path: 'student-list/:id',
    loadChildren: () => import('./student-list/student-list.module').then( m => m.StudentListPageModule)
  },
  {
    path: 'meeting-list/:id',
    loadChildren: () => import('./meeting-list/meeting-list.module').then( m => m.MeetingListPageModule)
  },
  {
    path: 'info-meeting/:id/:meetId',
    loadChildren: () => import('./info-meeting/info-meeting.module').then( m => m.InfoMeetingPageModule)
  },
  {
    path: 'new-meeting/:id',
    loadChildren: () => import('./new-meeting/new-meeting.module').then( m => m.NewMeetingPageModule)
  },
  {
    path: 'student-profile/:id/:studId',
    loadChildren: () => import('./student-profile/student-profile.module').then( m => m.StudentProfilePageModule)
  },
  {
    path: 'created-meetings/:id',
    loadChildren: () => import('./created-meetings/created-meetings.module').then( m => m.CreatedMeetingsPageModule)
  },  {
    path: 'accepted-meetings',
    loadChildren: () => import('./accepted-meetings/accepted-meetings.module').then( m => m.AcceptedMeetingsPageModule)
  },
  {
    path: 'rejected-meetings',
    loadChildren: () => import('./rejected-meetings/rejected-meetings.module').then( m => m.RejectedMeetingsPageModule)
  },
  {
    path: 'meetings-gpa',
    loadChildren: () => import('./meetings-gpa/meetings-gpa.module').then( m => m.MeetingsGpaPageModule)
  },
  {
    path: 'active-users',
    loadChildren: () => import('./active-users/active-users.module').then( m => m.ActiveUsersPageModule)
  },
  {
    path: 'condition-student',
    loadChildren: () => import('./condition-student/condition-student.module').then( m => m.ConditionStudentPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
