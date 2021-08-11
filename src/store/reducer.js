import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as loginReducer } from '../pages/login/store';

//这是总的reducer，拆分管理许多小的reducer
const reducer = combineReducers({  
  header: headerReducer,
  home: homeReducer,
  login: loginReducer,
});

export default reducer;