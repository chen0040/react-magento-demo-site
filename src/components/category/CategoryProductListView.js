import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import initialStates from '../../reducers/initialStates';
import * as categoryActions from '../../actions/categoryActions';
import CategoryProductView from './CategoryProductView';
import CategoryProductListViewPaging from './CategoryProductListViewPaging';

class CategoryProductListView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pageIndex: 0
        };
        
        this.gotoPage = this.gotoPage.bind(this);
    }
    
    gotoPage(pageIndex) {
        this.setState({
            pageIndex: pageIndex
        });
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.category.id != nextProps.category.id) {
            // Necessary to populate form when existing course is loaded directly.
            this.props.actions.loadCategoryProducts(nextProps.category.id);
        }
    }
    
    componentWillMount() {
        this.props.actions.loadCategoryProducts(this.props.category.id);
    }
    
    render() {
        let productCount = this.props.categoryProducts.length;
        let pageSize = 10;
        let totalPages = Math.ceil(productCount / pageSize);
        
        let pageStart = this.state.pageIndex * pageSize;
        let pageEnd = (this.state.pageIndex + 1) * pageSize;
        var displayed = [];
        for(var index = pageStart; index < pageEnd; ++index) {
            if(index >= this.props.categoryProducts.length) {
                break;
            }
            displayed.push(this.props.categoryProducts[index]);
        }
                               
        return (
            <div className="container-fluid">
                <div className="row-fluid">
                <CategoryProductListViewPaging totalPages={totalPages} onPageClicked={this.gotoPage} pageSize={pageSize} categoryProducts={this.props.categoryProducts} />
                </div>
                <div className="row-fluid">
                    {displayed.map((product, index) => <CategoryProductView key={product.sku} categoryProduct={product} />)} 
                </div>
            </div>
        );
    }
}

CategoryProductListView.propTypes = {
    actions: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        categoryProducts: state.categoryProducts 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProductListView);