import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChapterScriptProps {
  script: string;
}

const ChapterScript = ({ script }: ChapterScriptProps) => {
  return (
    <div className="container max-w-screen-md space-y-2 py-2 opacity-80">
      <div className="py-4">
        <ReactMarkdown
          className="prose prose-lg prose-strong:text-foreground text-foreground prose-img:rounded-lg prose-p:text-full"
          remarkPlugins={[remarkGfm]}
        >
          {script}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export { ChapterScript };
