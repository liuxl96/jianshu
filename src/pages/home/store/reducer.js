/* eslint-disable import/no-anonymous-default-export */
import { fromJS } from 'immutable';
import * as  constants from './constants';

// 统一管理home页的数据
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
});


export default (state = defaultState, action) => {
  if (action.type === constants.CHANGE_HOME_DATA) {
    return state.merge({
      topicList: fromJS(action.topicList),
      articleList: fromJS(action.articleList),
      recommendList: fromJS(action.recommendList)
    })
  }
  return state;
}