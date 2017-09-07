import React, {PropTypes} from 'react';

class CategoryProductListViewPaging extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.gotoPage = this.gotoPage.bind(this);
    }
    
    gotoPage(pageIndex) {
        this.props.onPageClicked(pageIndex);
    }
    
    render() {
        let pageButtons = [];
        for(var i=0; i < this.props.totalPages; ++i) {
            pageButtons.push(i);
        }
        return (
            <div>
                {pageButtons.map((buttonIndex, index) => <button key={index} onClick={() => this.gotoPage(buttonIndex) } className="btn btn-xs btn-default">{buttonIndex+1}</button>)}
            </div>
        );
    }
}

CategoryProductListViewPaging.propTypes = {
    categoryProducts: PropTypes.array.isRequired,
    totalPages: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageClicked: PropTypes.func.isRequired
};

export default CategoryProductListViewPaging;