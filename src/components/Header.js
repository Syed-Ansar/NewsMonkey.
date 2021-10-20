import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { ImSearch } from 'react-icons/im';
import './Header.css';

function Header() {
  const fetchSearchResults = async (searchTerm) => {
    const url = `https://newsapi.org/v2/everything?q=${'searchTerm'}&apiKey=c33a4d3161574668afdaf6c65c3879fe`;
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const [showMenu, setShowMenu] = useState(false);

  const showSidebar = () => setShowMenu(!showMenu);

  const HandleSubmit = (e) => {
    e.preventDefault();
    let term = { searchTerm };
    console.log(term);
    setSearchTerm('');
  };
  useEffect(() => {
    fetchSearchResults();
  }, []);
  return (
    <>
      <div className='mobile-header'>
        <div className='mobile-logo'>NewsMonkey.</div>
        <div onClick={showSidebar} className='hamburger'>
          {!showMenu ? <HiMenu /> : <MdClose />}
        </div>
      </div>
      <div className='navbar'>
        <div className={showMenu ? 'headeractive' : 'header'}>
          <a style={{ border: 'none' }} className='logo' href='/'>
            NewsMonkey.
          </a>
          <div className='sidebar nav-desktop'>
            <header>
              <div>
                <ul className='vertical'>
                  <li>
                    <Link to='/'>General</Link>
                  </li>
                  <li>
                    <Link to='/entertainment'>Entertainment</Link>
                  </li>
                  <li>
                    <Link to='/health'>Health</Link>
                  </li>
                  <li>
                    <Link to='/science'>Science</Link>
                  </li>
                  <li>
                    <Link to='/sports'>Sports</Link>
                  </li>
                  <li>
                    <Link to='/technology'>Technology</Link>
                  </li>
                </ul>
              </div>
            </header>
            <form className='form' onSubmit={HandleSubmit}>
              <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search...'
              />
              <button type='submit' className='search_button'>
                <ImSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
