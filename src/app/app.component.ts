import { Component } from '@angular/core';

import { PreLoaderComponent } from './site-framework/pre-loader/pre-loader.component';
import { HeaderComponent } from './site-framework/header/header.component';
import { SidebarComponent } from './site-framework/sidebar/sidebar.component';
import { FooterComponent } from './site-framework/footer/footer.component';
import { ControlSidebarComponent } from './site-framework/control-sidebar/control-sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminlte-app';
}
