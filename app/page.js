import variables from './variables.module.scss'
import styles from './index.module.scss'
import Vote from '@/components/vote/vote';
import service from '@/service/service';


export const dynamic = 'force-dynamic';

export default async function Home() {
  const _data = await service.getUsers();
  return (
    <main style={{ color: variables.primaryColor, height: '100vh' }}>
      <div className={styles.voteContainer}>
        <Vote data={_data} />
      </div>
    </main>
  )
}
