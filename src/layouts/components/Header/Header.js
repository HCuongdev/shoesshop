import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import styles from './Header.module.scss';
import BrandHeader from '../BrandHeader';
import Search from '../Search';
import Button from '~/components/Button';
import { CartIcon, FavoritesIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const listMenu = [
    {
        title: 'New & Features',
        to: '',
    },
    {
        title: 'Men',
        to: '/men',
    },
    {
        title: 'Women',
        to: '/women',
    },
    {
        title: 'Kids',
        to: '/kids',
    },
    {
        title: 'Accessories',
        to: '',
    },
    {
        title: 'Sale',
        to: '/sale',
    },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <BrandHeader />
            <header className={cx('header')}>
                <div className={cx('wrapper-logo')}>
                    <Link to={config.routes.home} className={cx('logo-home')}>
                        <img src={images.logo2} className={cx('logo-nike')} alt="swoosh logo" />
                    </Link>
                </div>
                <div className={cx('header-menu')}>
                    {listMenu.map((list, index) => {
                        return (
                            <Button to={list.to} primary key={index} className={cx('header-menu-btn')}>
                                {list.title}
                            </Button>
                        );
                    })}
                    {/* <Button primary className={cx('header-menu-btn')}>
                        New & Featured
                    </Button>
                    <Button primary className={cx('header-menu-btn')}>
                        Men
                    </Button>
                    <Button primary className={cx('header-menu-btn')}>
                        Women
                    </Button>
                    <Button primary className={cx('header-menu-btn')}>
                        Kids
                    </Button>
                    <Button to={'/'} primary className={cx('header-menu-btn')}>
                        Accessories
                    </Button>
                    <Button primary className={cx('header-menu-btn')}>
                        Sale
                    </Button> */}
                </div>
                <div className={cx('search-bar')}>
                    <Search />
                    <div className={cx('icon-btn')}>
                        <button className={cx('favorites-btn')}>
                            <FavoritesIcon />
                        </button>
                        <button className={cx('cart-btn')}>
                            <CartIcon />
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
