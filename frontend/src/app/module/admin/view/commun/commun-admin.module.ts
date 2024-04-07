import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { EntiteAdminCreateAdminComponent } from './entite-admin/create/entite-admin-create-admin.component';
import { EntiteAdminEditAdminComponent } from './entite-admin/edit/entite-admin-edit-admin.component';
import { EntiteAdminViewAdminComponent } from './entite-admin/view/entite-admin-view-admin.component';
import { EntiteAdminListAdminComponent } from './entite-admin/list/entite-admin-list-admin.component';
import { EmployeCreateAdminComponent } from './employe/create/employe-create-admin.component';
import { EmployeEditAdminComponent } from './employe/edit/employe-edit-admin.component';
import { EmployeViewAdminComponent } from './employe/view/employe-view-admin.component';
import { EmployeListAdminComponent } from './employe/list/employe-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    EntiteAdminCreateAdminComponent,
    EntiteAdminListAdminComponent,
    EntiteAdminViewAdminComponent,
    EntiteAdminEditAdminComponent,
    EmployeCreateAdminComponent,
    EmployeListAdminComponent,
    EmployeViewAdminComponent,
    EmployeEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,

  ],
  exports: [
  EntiteAdminCreateAdminComponent,
  EntiteAdminListAdminComponent,
  EntiteAdminViewAdminComponent,
  EntiteAdminEditAdminComponent,
  EmployeCreateAdminComponent,
  EmployeListAdminComponent,
  EmployeViewAdminComponent,
  EmployeEditAdminComponent,
  ],
})
export class CommunAdminModule { }
