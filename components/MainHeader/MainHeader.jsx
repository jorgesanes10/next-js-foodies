import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from '@/components/MainHeader/MainHeaderBackground';
import NavLink from '@/components/MainHeader/NavLink';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image priority={true} src={logoImg} alt="" />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
