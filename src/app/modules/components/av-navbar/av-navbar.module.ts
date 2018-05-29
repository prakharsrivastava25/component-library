import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvNavBarComponent } from './av-nav-bar/av-nav-bar.component';
import { AvNavGroupComponent } from './av-nav-group/av-nav-group.component';
import { AvNavItemComponent } from './av-nav-item/av-nav-item.component';
import { AvSidebarComponent } from './av-sidebar/av-sidebar.component';
import { UitreeComponent } from './av-sidebar/uitree/uitree.component';
import { RecursiveComponent } from './av-sidebar/recursive/recursive.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseComponent } from './av-sidebar/collapse/collapse.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCollapseModule
  ],
  declarations: [AvNavBarComponent, AvNavGroupComponent, AvNavItemComponent, AvSidebarComponent, UitreeComponent, RecursiveComponent, CollapseComponent],
  exports: [
    AvNavBarComponent,
    AvNavGroupComponent,
    AvNavItemComponent,
    AvSidebarComponent,
    UitreeComponent,
    RecursiveComponent,
    CollapseComponent
  ]
})
export class avNavbar { }
