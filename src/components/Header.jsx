import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';

class Header extends React.Component {
  constructor() {
    super();
    this.renderSearchButton = this.renderSearchButton.bind(this);
    this.onClickSearchBtn = this.onClickSearchBtn.bind(this);
    this.state = {
      searchBar: false,
    };
  }

  onClickSearchBtn() {
    this.setState((prev) => ({
      searchBar: !prev.searchBar,
    }));
  }

  renderSearchButton() {
    const { title } = this.props;
    if (title === 'Comidas' || title === 'Bebidas' || title === 'Explorar Origem') {
      return (
        <button type="button" onClick={ this.onClickSearchBtn } className="header-icon">
          <img
            src={ searchIcon }
            alt="search"
            data-testid="search-top-btn"
          />
        </button>
      );
    }
    return null;
  }

  render() {
    const { title } = this.props;
    const { searchBar } = this.state;
    return (
      <nav className="header">
        <Link to="/perfil">
          <img
            src={ profileIcon }
            alt="profile"
            data-testid="profile-top-btn"
            className="header-icon"
          />
        </Link>
        <h1 data-testid="page-title">{ title }</h1>
        { this.renderSearchButton() }
        { searchBar ? <SearchBar title={ title } /> : null }
      </nav>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
