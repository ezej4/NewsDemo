import cx from 'classnames';
import styles from './burger_menu.module.scss';

const BurgerMenu = ({
  onClick,
  isOpen,
  className,
}: {
  onClick: () => void;
  isOpen: boolean;
  className: string;
}) => {
  return (
    <div
      className={cx(styles.burger_menu, {
        [styles.burger_menu___open]: isOpen,
        [className]: className,
      })}
      onClick={onClick}
    >
      <div className={styles.icon_1}></div>
      <div className={styles.icon_2}></div>
      <div className={styles.icon_3}></div>
      <div className='clear'></div>
    </div>
  );
};

export default BurgerMenu;
