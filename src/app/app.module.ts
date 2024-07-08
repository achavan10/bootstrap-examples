import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { ImageGallaryComponent } from './image-gallary/image-gallary.component';
import { ColumnOffsetComponent } from './column-offset/column-offset.component';
import { NestedRowsComponent } from './nested-rows/nested-rows.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CollapseContentComponent } from './collapse-content/collapse-content.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabPaneComponent } from './tab-pane/tab-pane.component';
import { FormsComponent } from './forms/forms.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalComponent } from './modal/modal.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';

@NgModule({
  declarations: [
    AppComponent,
    GridSystemComponent,
    ImageGallaryComponent,
    ColumnOffsetComponent,
    NestedRowsComponent,
    ButtonsComponent,
    CollapseContentComponent,
    CarouselComponent,
    TabPaneComponent,
    FormsComponent,
    AccordionComponent,
    ModalComponent,
    ScrollspyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
