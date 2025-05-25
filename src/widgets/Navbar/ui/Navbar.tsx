import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { FC } from 'react';
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className!])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about' className={cls.aboutLink}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
}