import Markdown from 'react-markdown'

const markdown = '# Hi, *Mako*!'

export default function HomePage() {
  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
