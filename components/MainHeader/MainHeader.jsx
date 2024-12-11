import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from '@/components/MainHeader/MainHeaderBackground';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/public">
          <Image priority={true} src={logoImg} alt="" />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
