import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class CategorieProduitCriteria  extends BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public code: string;
    public codeLike: string;

}
