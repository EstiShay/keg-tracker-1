import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { KegDisplayComponent } from './keg-display.component';
import { FormsModule }  from '@angular/forms';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { ABVPipe } from './ABV.pipe';
import { SalePipe } from './SalePipe.pipe';

@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  KegDisplayComponent,
                  EditKegComponent,
                  NewKegComponent,
                  ABVPipe,
                  SalePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
