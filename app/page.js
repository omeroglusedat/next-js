import variables from './variables.module.scss'
import styles from './index.module.scss'
import Vote from '@/components/vote/vote';

export async function getData() {
  const response = await fetch('http://localhost:5305/users', {
    next: { revalidate: 0 },
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json();
  return data;
}


export default async function Home() {
  const _data = await getData();
  return (
    <main style={{ color: variables.primaryColor, height: '100vh' }}>
      <div className={styles.voteContainer}>
        <Vote data={_data} />
      </div>
    </main>
  )
}
