import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ExpressionBesoinDetailAdminService} from 'src/app/shared/service/admin/expressionbesoin/ExpressionBesoinDetailAdmin.service';
import {ExpressionBesoinDetailDto} from 'src/app/shared/model/expressionbesoin/ExpressionBesoinDetail.model';
import {ExpressionBesoinDetailCriteria} from 'src/app/shared/criteria/expressionbesoin/ExpressionBesoinDetailCriteria.model';
import {ExpressionBesoinDto} from 'src/app/shared/model/expressionbesoin/ExpressionBesoin.model';
import {ExpressionBesoinAdminService} from 'src/app/shared/service/admin/expressionbesoin/ExpressionBesoinAdmin.service';
import {ProduitDto} from 'src/app/shared/model/produit/Produit.model';
import {ProduitAdminService} from 'src/app/shared/service/admin/produit/ProduitAdmin.service';
import {
    ExpressionBesoinDetailEmployeService
} from "../../../../../../shared/service/employe/expressionbesoin/expression-besoin-detail-employe.service";
import {
    ExpressionBesoinEmployeService
} from "../../../../../../shared/service/employe/expressionbesoin/expression-besoin-employe.service";
import {ProduitEmployeService} from "../../../../../../shared/service/employe/produit/produit-employe.service";
@Component({
  selector: 'app-expression-besoin-detail-create-employe',
  templateUrl: './expression-besoin-detail-create-employe.component.html'
})
export class ExpressionBesoinDetailCreateEmployeComponent extends AbstractCreateController<ExpressionBesoinDetailDto, ExpressionBesoinDetailCriteria, ExpressionBesoinDetailEmployeService>  implements OnInit {



    private _validProduitCode = true;
    private _validProduitLibelle = true;

    constructor( private expressionBesoinDetailService: ExpressionBesoinDetailEmployeService , private expressionBesoinService: ExpressionBesoinEmployeService, private produitService: ProduitEmployeService) {
        super(expressionBesoinDetailService);
    }

    ngOnInit(): void {
        this.expressionBesoin = new ExpressionBesoinDto();
        this.expressionBesoinService.findAll().subscribe((data) => this.expressionBesoins = data);
        this.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateExpressionBesoin(expressionBesoin: string) {
    const isPermistted = await this.roleService.isPermitted('ExpressionBesoin', 'add');
    if(isPermistted) {
         this.expressionBesoin = new ExpressionBesoinDto();
         this.createExpressionBesoinDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get produit(): ProduitDto {
        return this.produitService.item;
    }
    set produit(value: ProduitDto) {
        this.produitService.item = value;
    }
    get produits(): Array<ProduitDto> {
        return this.produitService.items;
    }
    set produits(value: Array<ProduitDto>) {
        this.produitService.items = value;
    }
    get createProduitDialog(): boolean {
       return this.produitService.createDialog;
    }
    set createProduitDialog(value: boolean) {
        this.produitService.createDialog= value;
    }
    get expressionBesoin(): ExpressionBesoinDto {
        return this.expressionBesoinService.item;
    }
    set expressionBesoin(value: ExpressionBesoinDto) {
        this.expressionBesoinService.item = value;
    }
    get expressionBesoins(): Array<ExpressionBesoinDto> {
        return this.expressionBesoinService.items;
    }
    set expressionBesoins(value: Array<ExpressionBesoinDto>) {
        this.expressionBesoinService.items = value;
    }
    get createExpressionBesoinDialog(): boolean {
       return this.expressionBesoinService.createDialog;
    }
    set createExpressionBesoinDialog(value: boolean) {
        this.expressionBesoinService.createDialog= value;
    }




    get validProduitCode(): boolean {
        return this._validProduitCode;
    }
    set validProduitCode(value: boolean) {
        this._validProduitCode = value;
    }
    get validProduitLibelle(): boolean {
        return this._validProduitLibelle;
    }
    set validProduitLibelle(value: boolean) {
        this._validProduitLibelle = value;
    }


}
