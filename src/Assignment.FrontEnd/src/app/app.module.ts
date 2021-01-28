import { NgModule } from '@angular/core';
import { appDeclarations, commonImports } from './app-config/appModuleConfig';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [appDeclarations],
  imports: [commonImports],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
