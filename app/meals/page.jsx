import { Suspense } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/Meals/MealsGrid';
import { getMeals } from '@/lib/meals';

function Meals() {
  const meals = getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is ease and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
