import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientStorageModule, StorageConfig, StorageType } from 'orm';

const CONFIG: StorageConfig = {
  location: StorageType.Session,
  namespace: 'app',
  encryption: true,
  properties: [
    {
      name: 'testSession',
      readonly: true,
      value: 1234
    },
    {
      name: 'testlocal',
      value: 2,
    }
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    ClientStorageModule.config(CONFIG),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
