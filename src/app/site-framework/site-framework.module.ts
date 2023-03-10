import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, PreLoaderComponent, ControlSidebarComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SidebarComponent, FooterComponent, PreLoaderComponent, ControlSidebarComponent]
})
export class SiteFrameworkModule {}
