import { Routes } from '@angular/router';
import { HeadlinerComponent } from './headliner/headliner.component';
import { PicComponent } from './pic/pic.component';


export const routes: Routes = [
    { path: 'headliner', component: HeadlinerComponent },
    { path: 'pic', component: PicComponent }];
