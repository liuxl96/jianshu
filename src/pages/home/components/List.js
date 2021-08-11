import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo
} from '../style';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        {
          list.map((item) => {
            return (
              <Link key={item.get('id')} to='./detail'>
                <ListItem >
                  <img 
                    src={item.get('imgUrl')} 
                    className="pic"
                    alt="error"
                  />
                  <ListInfo>
                    <h3 className="title">
                      {item.get('title')}
                    </h3>
                    <p className="desc">
                      {item.get('desc')}
                    </p>
                  </ListInfo>
                </ListItem>
                </Link>  
            );
          })
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList'])
})

export default connect(mapStateToProps)(List);