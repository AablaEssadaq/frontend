import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EntiteAdminAdminService} from 'src/app/shared/service/admin/commun/EntiteAdminAdmin.service';
import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminCriteria} from 'src/app/shared/criteria/commun/EntiteAdminCriteria.model';

import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/commun/EmployeAdmin.service';
@Component({
  selector: 'app-entite-admin-view-admin',
  templateUrl: './entite-admin-view-admin.component.html'
})
export class EntiteAdminViewAdminComponent extends AbstractViewController<EntiteAdminDto, EntiteAdminCriteria, EntiteAdminAdminService> implements OnInit {


    constructor(private entiteAdminService: EntiteAdminAdminService, private employeService: EmployeAdminService){
        super(entiteAdminService);
    }

    ngOnInit(): void {
    }


    get chef(): EmployeDto {
       return this.employeService.item;
    }
    set chef(value: EmployeDto) {
        this.employeService.item = value;
    }
    get chefs(): Array<EmployeDto> {
       return this.employeService.items;
    }
    set chefs(value: Array<EmployeDto>) {
        this.employeService.items = value;
    }


}
