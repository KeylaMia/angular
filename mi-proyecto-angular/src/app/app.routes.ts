import { Routes } from '@angular/router';
import { Detalle1 } from './detalle1/detalle1';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import { Detalle2 } from './detalle2/detalle2';
import { Detalle4 } from './detalle4/detalle4';
import { FormPlantilla } from './form-plantilla/form-plantilla';
import { FormReactivo } from './form-reactivo/form-reactivo';

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
        path:'detalle4', 
        component: Detalle4,
        title: 'Detalle 4'
    },
    {
        path:'redetalles', redirectTo:'/detalle1'
    },
        {
    path: 'formplantilla',
    component: FormPlantilla,
    title: 'Formulario basado en plantilla',
    },
     {
    path: 'formReactivo',
    component: FormReactivo,
    title: 'Formulario reactivo',
    },
    {
        path:'**',
        component: NoEncontrado,
        title: 'No encontrado'
    },

];
