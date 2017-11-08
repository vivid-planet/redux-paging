import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        ev.preventDefault();

        const { active, disabled, onChangePage, page } = this.props;
        if (!active && !disabled) onChangePage(page);
    }

    render() {
        const { text, active, disabled } = this.props;

        const classNames = ['kwfUp-reduxPaging__item'];
        if (active) classNames.push('kwfUp-reduxPaging__item--active');
        if (disabled) classNames.push('kwfUp-reduxPaging__item--disabled');

        return (
            <li className={classNames.join(' ')}>
                <a
                    className="kwfUp-reduxPaging__link"
                    href="#"
                    onClick={this.handleClick}
                >
                    {text}
                </a>
            </li>
        );
    }
}

Button.propTypes = {
    page: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    text: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.number
    ]).isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onChangePage: PropTypes.func.isRequired
};

export default Button;
