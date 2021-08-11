import reducer from './reducer';
import * as actionCreators from './actionCreator';
import * as  constants from './constants';

// 统一导出reducer路径，不要直接暴露接口
export { reducer, actionCreators, constants };