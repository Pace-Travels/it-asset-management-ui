import { Routes } from "@angular/router";
import { AssetInfoList } from "./asset-info-list/asset-info-list";
import { AssetInfoAdd } from "./asset-info-add/asset-info-add";
import { AssetInfoEdit } from "./asset-info-edit/asset-info-edit";
import { AssetInfoView } from "./asset-info-view/asset-info-view";

export const ASSETINFO_ROUTE : Routes = [
    {
        path : '', component:AssetInfoList
    },
    {
        path:'add', component:AssetInfoAdd
    },
    {
        path:'update/:id', component:AssetInfoEdit
    },
    {
        path:'view/:id', component:AssetInfoView
    }
]