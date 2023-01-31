import React, { Component } from 'react';
import { connect } from "react-redux";
import { Badge, Table } from 'reactstrap';
import { bindActionCreators } from "redux"
import * as productActions from "../../redux/actions/categoryActions"



class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
    }
    render() {
        return (
            <div>
                <h3>
                    <Badge color='warning'>
                        Products
                    </Badge>
                    <Badge color='success'>
                        {this.props.currentCategory.categoryName}
                    </Badge>
                    <Table
                    >
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    First Name
                                </th>
                                <th>
                                    Last Name
                                </th>
                                <th>
                                    Username
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    Mark
                                </td>
                                <td>
                                    Otto
                                </td>
                                <td>
                                    @mdo
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2
                                </th>
                                <td>
                                    Jacob
                                </td>
                                <td>
                                    Thornton
                                </td>
                                <td>
                                    @fat
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                    Larry
                                </td>
                                <td>
                                    the Bird
                                </td>
                                <td>
                                    @twitter
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //mapStateToProps=> map et, bağla statei yani belirleyeceğimiz bir statei propsa bağla
    return {
        currentCategory: state.changeCategoryReducer,
        prodducts: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    //mapDispatchToProps: aksiyonu proplara bağla dispatch parametresi ile
    return {
        actions: {
            getProducts: bindActionCreators(
                productActions.getProducts,
                dispatch
            ),
            //getCategories  aksiyonu için bindActionCreators a categoryActions lerimizdaki 
            // getCategories i bağla. 

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

