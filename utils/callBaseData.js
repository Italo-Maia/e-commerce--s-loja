import actions from '../redux/actions';
import { fetchData } from './fetch';

export default function(calls = [], context){
    return Promise.all([
        fetchData(actions.fetchCategorias, context),
        fetchData(actions.fetchDadosLoja, context),
        ...calls.map((action) => fetchData(action, context))
    ]);
}