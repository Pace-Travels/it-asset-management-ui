import { Routes } from "@angular/router";
import { AssetInfoStatusList } from "./asset-info-status-list/asset-info-status-list";
import { AssetInfoStatusAdd } from "./asset-info-status-add/asset-info-status-add";
import { AssetInfoStatusEdit } from "./asset-info-status-edit/asset-info-status-edit";

export const ASSET_INFO_STATUS : Routes = [
    {
        path:'', component : AssetInfoStatusList
    },
    {
        path:'add', component:AssetInfoStatusAdd
    },
    {
        path:'update/:id', component:AssetInfoStatusEdit
    }
]