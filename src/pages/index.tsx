import Markdown from 'react-markdown'
import styles from './index.less';


const markdown = '# Hi, *Mako*!'

export default function HomePage() {
  return (
    <>
      <div className={styles.textBox}>
        Text: 
        <p>{markdown}</p>
      </div>
      <div className={styles.markdownBox}>
        Markdown: 
        <Markdown>{markdown}</Markdown>
      </div>
    </>
  );
}
