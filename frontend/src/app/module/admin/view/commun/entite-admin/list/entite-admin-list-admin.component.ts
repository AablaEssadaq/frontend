import {Component, OnInit} from '@angular/core';
import {EntiteAdminAdminService} from 'src/app/shared/service/admin/commun/EntiteAdminAdmin.service';
import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminCriteria} from 'src/app/shared/criteria/commun/EntiteAdminCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/commun/EmployeAdmin.service';


@Component({
  selector: 'app-entite-admin-list-admin',
  templateUrl: './entite-admin-list-admin.component.html'
})
export class EntiteAdminListAdminComponent extends AbstractListController<EntiteAdminDto, EntiteAdminCriteria, EntiteAdminAdminService>  implements OnInit {

    override fileName = 'EntiteAdmin';


    chefs: Array<EmployeDto>;


    constructor( private entiteAdminService: EntiteAdminAdminService  , private employeService: EmployeAdminService) {
        super(entiteAdminService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('EntiteAdmin').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadChef();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'chef?.id', header: 'Chef'},
        ];
    }


    public async loadChef(){
       this.employeService.findAll().subscribe(chefs => this.chefs = chefs, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Chef': e.chef?.id ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Chef': this.criteria.chef?.id ? this.criteria.chef?.id : environment.emptyForExport ,
        }];
      }
}
