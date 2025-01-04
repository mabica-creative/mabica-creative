import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// MarkdownPreview component
interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  return (
    <div className="w-full lg:w-1/2 h-96 p-4 border rounded-md shadow-md overflow-y-auto">
      <ReactMarkdown
        className="prose prose-lg text-foreground"
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export { MarkdownPreview }
