import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions';
import CategoryProductListView from '../category/CategoryProductListView';

class HomePage extends React.Component {
    
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div>
              <React_Bootstrap_Carousel
                animation={true}
                onSelect={this.onSelect}
                className="carousel-fade"
              >
                <div style={{height:300,width:"100%"}}>
                  <img src='assets/images/placeholder_carousel_a.png' style={{width:'100%'}} />
                </div>
                <div style={{height:300,width:"100%"}}>
                  <img src='assets/images/placeholder_carousel_b.png' style={{width:'100%'}} />
                </div>
                <div style={{height:300,width:"100%"}}>
                  <img src='assets/images/placeholder_carousel_c.png' style={{width:'100%'}} />
                </div>
                <div style={{height:300,width:"100%"}}>
                  <img src='assets/images/placeholder_carousel_d.png' style={{width:'100%'}} />
                </div>
              </React_Bootstrap_Carousel>
            
                <CategoryProductListView category={this.props.rootCategory} />
            </div>
        );
    }
}

HomePage.propTypes = {
    rootCategory: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        rootCategory: state.rootCategory 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);