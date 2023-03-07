import classNames from 'classnames/bind';

import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <input placeholder="Search" spellCheck={false} />
            </div>
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
        </div>
    );
}

export default Search;
