import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content?: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  if (!content) {
    return <p className="text-ink/50 font-mono text-sm">No content available.</p>;
  }

  return (
    <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink/80 prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-blockquote:border-accent prose-blockquote:text-ink/70 prose-li:text-ink/80">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}