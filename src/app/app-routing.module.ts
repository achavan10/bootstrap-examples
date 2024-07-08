import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full'},
  { path: 'grid', component: GridSystemComponent },
  { path: 'images', component: ImageGallaryComponent },
  { path: 'col-offset', component: ColumnOffsetComponent },
  { path: 'nested-rows', component: NestedRowsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'collapse', component: CollapseContentComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs-pane', component: TabPaneComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'scrollspy', component: ScrollspyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
