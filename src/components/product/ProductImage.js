import React, {PropTypes} from 'react';
import MagentoProductApi from '../../api/MagentoProductApi';
import MagentoAccountInfo from '../../api/MagentoAccountInfo';

const ProductImage = ({product}) => {
    return (
        <div>
            <img width="300" height="300" src={MagentoProductApi.getThumbnailImageUrl(MagentoAccountInfo.url, product)} />
        </div>
    );
};

ProductImage.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductImage;