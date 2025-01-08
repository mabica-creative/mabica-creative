"use client";

import { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import {
  Bold,
  Italic,
  Link,
  Image as ImageIcon,
  Loader,
  Eye,
  EyeOff,
} from "lucide-react"; // Importing icons from lucide-react
import ReactMarkdown from "react-markdown"; // To render markdown

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState<string>(""); // State for markdown text
  const [isUploading, setIsUploading] = useState<boolean>(false); // Loading state for image upload
  const [previewVisible, setPreviewVisible] = useState<boolean>(true); // State to toggle preview visibility
  const textareaRef = useRef<HTMLTextAreaElement>(null); // Textarea reference

  // Handle file drop and upload
  const onDrop = async (acceptedFiles: File[]) => {
    if (isUploading) return; // Prevent uploads if already in progress
    setIsUploading(true); // Set loading state to true while uploading

    for (const file of acceptedFiles) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (response.ok) {
          const fileUrl = data.url;

          // Insert URL into markdown
          const textarea = textareaRef.current;
          if (!textarea) return;

          const cursorPos = textarea.selectionStart;
          const beforeText = markdown.slice(0, cursorPos);
          const afterText = markdown.slice(cursorPos);

          const isImage = file.type.startsWith("image/");
          const fileMarkdown = isImage
            ? `![Image](${fileUrl})`
            : `[File](${fileUrl})`;

          setMarkdown(`${beforeText}${fileMarkdown}\n${afterText}`);
        } else {
          alert("Upload failed: " + data.error);
        }
      } catch (error) {
        alert("An error occurred while uploading the file.");
      } finally {
        setIsUploading(false); // Set loading state to false after upload completes
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Helper function to apply markdown formatting to selected text
  const applyFormatting = (markdownSyntax: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Get the selected text
    const selectedText = textarea.value.substring(
      textarea.selectionStart,
      textarea.selectionEnd,
    );

    if (!selectedText) return;

    const beforeText = markdown.slice(0, textarea.selectionStart);
    const afterText = markdown.slice(textarea.selectionEnd);

    // Apply the markdown syntax (e.g., bold, italic)
    setMarkdown(
      `${beforeText}${markdownSyntax}${selectedText}${markdownSyntax}${afterText}`,
    );

    // Reposition the cursor after applying the formatting
    textarea.selectionStart = textarea.selectionEnd =
      beforeText.length + markdownSyntax.length + selectedText.length;
  };

  // Formatting buttons to insert markdown syntax
  const handleBold = () => applyFormatting("**");
  const handleItalic = () => applyFormatting("*");

  return (
    <div className="container mx-auto p-6 py-24">
      <div className="w-full">
        <div className="mb-4">
          {/* Toolbar for text formatting */}
          <div className="flex gap-4 mb-2">
            <button onClick={handleBold} className="text-lg">
              <Bold />
            </button>
            <button onClick={handleItalic} className="text-lg">
              <Italic />
            </button>
            {/* Image upload button */}
            <div
              {...getRootProps()}
              className="flex justify-center items-center"
            >
              <input {...getInputProps()} />
              <button className="text-lg">
                {isUploading ? (
                  <Loader className="animate-spin" />
                ) : (
                  <ImageIcon />
                )}
              </button>
            </div>
            {/* Toggle Preview Button */}
            <button
              onClick={() => setPreviewVisible((prev) => !prev)}
              className="text-lg"
            >
              {previewVisible ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <textarea
            ref={textareaRef}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-96 p-4 border rounded-md"
            placeholder="Write your markdown here..."
          />
          {/* Live Markdown Preview */}
          {previewVisible && (
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-2">Live Preview</h2>
              <div className="w-full p-4 border rounded-md overflow-auto bg-gray-50">
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
