//Funçao de chamada da loja para validar se tem cookie ou se não

import Router from 'next/router';
import actions from '../redux/actions';
import { getCookie } from './cookie';

export default function(context){
    if(context.isServer){
        context.store.dispatch(actions.reauthenticate(getCookie("token", context.req)));
    } else if(context.store){
        const token = context.store.getState().auth.token;
        if(!token && (
            context.pathname.includes("/client-area/client-product-item") ||
            context.pathname.includes("/client-area/data") || 
            context.pathname.includes("/client-area/reset-password")
        )) Router.push("/client-area");
    }
}