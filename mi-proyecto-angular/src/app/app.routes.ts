import { Routes } from '@angular/router';
import { Detalle1 } from './detalle1/detalle1';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import { Detalle2 } from './detalle2/detalle2';

export const routes: Routes = [
    {
        path:'detalle1',
        component: Detalle1,
        title: 'Detalle 1'
    },
    {
        path:'detalle2/:miparam',
        component: Detalle2,
        title: 'Detalle 2 con parametro'
    },
    {
        path:'redetalles', redirectTo:'/detalle1'
    },
    {
        path:'**',
        component: NoEncontrado,
        title: 'No encontrado'
    },

];
