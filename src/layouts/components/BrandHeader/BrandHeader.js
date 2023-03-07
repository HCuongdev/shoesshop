import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import styles from './BrandHeader.module.scss';
import { UserIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function BrandHeader() {
    const currentUser = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('brand-header')}>
                <ul className={cx('brand-menu')}>
                    <li className={cx('brand-item')}>
                        <Link to={config.routes.jordan} className={cx('logo-jordan')}>
                            <img src={images.logo} alt="Jordan" />
                        </Link>
                    </li>
                    <li className={cx('brand-item')}>
                        <Link to={config.routes.converse} className={cx('logo-converse')}>
                            <img src={images.logo1} alt="Converse" />
                        </Link>
                    </li>
                </ul>
                <div className={cx('user-menu')}>
                    <Link to="" className={cx('user-item')}>
                        Find a Store
                    </Link>
                    <span className={cx('divider-bar')}>|</span>
                    <Link to={config.routes.help} className={cx('user-item')}>
                        Help
                    </Link>
                    <span className={cx('divider-bar')}>|</span>
                    {currentUser ? (
                        <>
                            <Link to="" className={cx('user-signed')}>
                                Hi, Hoang
                            </Link>
                            <button className={cx('user-icon')}>
                                <UserIcon />
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="" className={cx('user-item')}>
                                Join Us
                            </Link>
                            <span className={cx('divider-bar')}>|</span>
                            <Link to={config.routes.signin} className={cx('user-item')}>
                                Sign In
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BrandHeader;
