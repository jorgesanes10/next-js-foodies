import styles from './page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  const instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} fill alt="" />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        ></p>
      </main>
    </>
  );
}
