import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {routing} from './app.route';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NarBarComponent } from './components/nar-bar/nar-bar.component';
import { EditorComponent } from './components/editor/editor.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';


import { DataService } from './services/data.service';
import { CollaborationService } from './services/collaboration.service';




@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NarBarComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [{
    provide: "data",
    useClass: DataService
  },{
    provide: "collaboration",
    useClass: CollaborationService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
