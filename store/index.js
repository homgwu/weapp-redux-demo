import {createStore,combineReducers} from '../libs/redux.min'
import rootReducer from './reducers/index'

export default function configAndCreateStore(){
    return createStore(combineReducers(rootReducer))
}