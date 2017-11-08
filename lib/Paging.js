import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from "./actions";
import Button from './Button';

class Paging extends Component {
    componentWillMount() {
        const { handleRegister, name } = this.props;
        handleRegister(name);
    }

    render() {
        const { totalPages, items, onChangePage } = this.props;
        if (totalPages <= 1) return null;

        return (
            <div className="kwfUp-reduxPaging">
                <ul className="kwfUp-reduxPaging__pagination">
                    {items.map((item, index) =>
                        <Button
                            key={index}
                            onChangePage={onChangePage}
                            {...item}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { paging } = state;
    const { name, total, perPage } = ownProps;

    const activePage = paging.get(name);
    const totalPages = Math.ceil(total / perPage);
    const range = (ownProps.range) ? ownProps.range : 1;
    const items = [];

    let left = activePage - range;
    if (left < 1) left = 1;
    let right = activePage + range;
    if (right > totalPages) right = totalPages;

    for (let page = left; page <= right; page++) {
        items.push({
            page,
            text: page,
            active: activePage == page,
            disabled: false
        });
    }
    if (left > range) items.unshift({ page: 'placeholderLeft', text: <span>&hellip;</span>, disabled: true });
    if (left > 1) items.unshift({ page: activePage - 1, text: <span>&lt;</span> });
    if (right - totalPages < 0) items.push({ page: 'placeholderRight', text: <span>&hellip;</span>, disabled: true });
    if (activePage < totalPages) items.push({ page: activePage + 1, text: <span>&gt;</span> });

    return {
        items,
        totalPages
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { name } = ownProps;

    return {
        handleRegister: () => {
            dispatch(register(name));
        }
    };
};

const Connector = connect(mapStateToProps, mapDispatchToProps)(Paging);

Connector.propTypes = {
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    range: PropTypes.number,
    onChangePage: PropTypes.func.isRequired
};

export default Connector;
