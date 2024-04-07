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

import { ResponsabiliteCreateAdminComponent } from './responsabilite/create/responsabilite-create-admin.component';
import { ResponsabiliteEditAdminComponent } from './responsabilite/edit/responsabilite-edit-admin.component';
import { ResponsabiliteViewAdminComponent } from './responsabilite/view/responsabilite-view-admin.component';
import { ResponsabiliteListAdminComponent } from './responsabilite/list/responsabilite-list-admin.component';
import { MandatCreateAdminComponent } from './mandat/create/mandat-create-admin.component';
import { MandatEditAdminComponent } from './mandat/edit/mandat-edit-admin.component';
import { MandatViewAdminComponent } from './mandat/view/mandat-view-admin.component';
import { MandatListAdminComponent } from './mandat/list/mandat-list-admin.component';

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

    ResponsabiliteCreateAdminComponent,
    ResponsabiliteListAdminComponent,
    ResponsabiliteViewAdminComponent,
    ResponsabiliteEditAdminComponent,
    MandatCreateAdminComponent,
    MandatListAdminComponent,
    MandatViewAdminComponent,
    MandatEditAdminComponent,
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
  ResponsabiliteCreateAdminComponent,
  ResponsabiliteListAdminComponent,
  ResponsabiliteViewAdminComponent,
  ResponsabiliteEditAdminComponent,
  MandatCreateAdminComponent,
  MandatListAdminComponent,
  MandatViewAdminComponent,
  MandatEditAdminComponent,
  ],
})
export class MandatAdminModule { }
