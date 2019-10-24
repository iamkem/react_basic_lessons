import React from 'react';

function sanPham (props) {
    return ( <div className = "sanPham">
        <p>{props.tensanPham} 
        - Mã sản phẩm: {props.masanPham} 
        - Giá: {props.giasanPham} Mô tả sản phẩm: 
        - {props.children}</p> 
    </div>
    );
}
export default sanPham;