// NGRX
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { errorsReducer } from './error-state/error-state.reducer';


// tslint:disable-next-line:no-empty-interface
export interface AppState { }

export const reducers: ActionReducerMap<AppState> = {  router: routerReducer, errorState: errorsReducer };

export const metaReducers: MetaReducer<AppState>[] = []
