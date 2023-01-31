import React, { Component } from 'react';
import { connect } from "react-redux"
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Badge } from 'reactstrap';
import { bindActionCreators } from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
        //kategorileri çektik.
    }
    selectCategory = category => {
        this.props.actions.changeCategory(category)
    }
    render() {
        return (
            <div>
                <h3><Badge color='warning'>
                    Categories
                </Badge></h3>
                <ListGroup>
                    {
                        this.props.categories.map(category => (
                            //this.props.categories i mapleyip her bir category için
                            <ListGroupItem active={category.id === this.props.currentCategory.id} onClick={() => this.selectCategory(category)} key={category.id}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))}
                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //mapStateToProps=> map et, bağla statei yani belirleyeceğimiz bir statei propsa bağla
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    //mapDispatchToProps: aksiyonu proplara bağla dispatch parametresi ile
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            //getCategories  aksiyonu için bindActionCreators a categoryActions lerimizdaki 
            // getCategories i bağla. 
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CategoryList);