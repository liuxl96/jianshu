import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list && this.props.list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img 
                  className='topic-pic'
                  src={item.get('imgUrl')} 
                  alt='error'
                />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

// 想拿到fromJS--immutable数据
const mapStateToProps = (state) => ({
  list: state.get(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic);