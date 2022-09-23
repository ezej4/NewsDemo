import { useState } from 'react';
import cx from 'classnames';
import styles from './nav_bar.module.scss';
import { IHeaderProps } from './types';
import BurgerMenu from './burgerMenu';
import Icon from '../icon';
import configs from '../../configs';
const { baseUrl } = configs;

const Header = ({ links, renderLinkAs }: IHeaderProps) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const handleMenuClick = (linkCallback: (() => void) | undefined) => {
    setIsShowingMenu((isShowing) => !isShowing);
    if (linkCallback) {
      linkCallback();
    }
  };

  return (
    <header className={styles.nav_bar}>
      <div className={styles.nav_bar__content}>
        <BurgerMenu
          className={styles.nav_bar__switch_menu}
          isOpen={isShowingMenu}
          onClick={() => setIsShowingMenu((isShowing) => !isShowing)}
        />

        <a className={styles.nav_bar__logo} href={baseUrl}>
          <Icon name='news' />
          <h2>Awesome news</h2>
        </a>
        <nav
          className={cx(styles.nav_bar__nav, {
            [styles.nav_bar__nav___open]: isShowingMenu,
          })}
        >
          <ul className={styles.nav_bar__nav_list}>
            {links &&
              links.map((link) => (
                <li key={link.name} className={styles.nav_bar__nav_list_item}>
                  {renderLinkAs === 'a' ? (
                    <a
                      className={cx(styles.nav_bar__nav_list_item_element, {
                        [styles.nav_bar__nav_list_item_element_active]:
                          link.active,
                      })}
                      href={link.href}
                    >
                      {link.text}
                    </a>
                  ) : (
                    <span
                      data-testid={link.name}
                      className={cx(styles.nav_bar__nav_list_item_element, {
                        [styles.nav_bar__nav_list_item_element_active]:
                          link.active,
                      })}
                      onClick={() => handleMenuClick(link.callback)}
                    >
                      {link.text}
                    </span>
                  )}
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
