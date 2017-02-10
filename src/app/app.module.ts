import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';

// home page
import { HomeComponent } from './home/home.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormComponent } from './form-example/form-example.component';
import { FormNgComponent } from './form-ng/form-ng.component';

// about page
import { AboutComponent } from './about/about.component';
import { AboutChildComponent } from './about-child/about-child.component';
import { AboutTestChildComponent } from './about-test-child/about-test-child.component';

// services
import { TodoServices } from './shared/todo.service/todo.service';
import { BoldDirective } from './bold-directive/bold.directive';
import { StructureDirective } from './structure-directive/structure.directive';
import { LogService } from './shared/log.service';

// shared and routing
import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [ // class which use this module
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [ // class which have this module
    AppComponent,
    BoldDirective,
    StructureDirective,
    HomeComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    FormComponent,
    FormNgComponent,
    AboutComponent,
    AboutChildComponent,
    AboutTestChildComponent
  ],
  providers: [ // class which create services and use this module
    ApiService,
    TodoServices,
    LogService
  ],
  exports: [], // class which use in other modules
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
  }

  hmrOnInit(store) {
    console.log('HMR store', store);
  }

  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
