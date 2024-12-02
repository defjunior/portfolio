import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import { HashRouter, Routes, Route } from 'react-router-dom';
import articlesData from './articledata';
import Article from './Article';
import TagList from './TagList';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
function useMarkdownStringSub(markdownPath) {
  const [markdownString, setMarkdownString] = useState('');

  useEffect(() => {
      // Fetch the markdown file and update the state
      fetch(markdownPath)
          .then((response) => response.text())
          .then((text) => setMarkdownString(text))
          .catch((error) => console.error('Error fetching markdown:', error));
  }, [markdownPath]);

  // Return a truncated version of the string
  return markdownString.length > 100
      ? `${markdownString.substring(0, 100)}...`
      : markdownString;
}



/**
 * Helper function to generate a URL-friendly ID for headings
 */
const generateId = (children) => {
  return React.Children.toArray(children)
      .map((child) => (typeof child === "string" ? child : ""))
      .join("")
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, ""); // Remove non-alphanumeric characters
};

function MarkdownRenderer({ filePath, onContentLoaded }) {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
      const fetchMarkdown = async () => {
          const response = await fetch(filePath);
          const text = await response.text();
          setMarkdownContent(text);

          // Extract headings and pass them to the callback
          if (text !== markdownContent) {
            if (onContentLoaded) {
              const headingRegex = /^(#{1,6})\s+(.*)$/gm;
              const headings = [];
              let match;

              while ((match = headingRegex.exec(text)) !== null) {
                  headings.push({
                      level: match[1].length, // Number of `#`
                      text: match[2],        // Heading text
                      id: generateId([match[2]]), // Use helper function for ID
                  });
              }

              onContentLoaded(headings);
          }
          }
          
      };

      fetchMarkdown();
  }, [filePath, onContentLoaded]);

  return (
      <div className="markdown-content">
          <ReactMarkdown
              components={{
                  h1: ({ node, ...props }) => (
                      <h1 id={generateId(props.children)} {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                      <h2 id={generateId(props.children)} {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                      <h3 id={generateId(props.children)} {...props} />
                  ),
                  h4: ({ node, ...props }) => (
                      <h4 id={generateId(props.children)} {...props} />
                  ),
                  h5: ({ node, ...props }) => (
                      <h5 id={generateId(props.children)} {...props} />
                  ),
                  h6: ({ node, ...props }) => (
                      <h6 id={generateId(props.children)} {...props} />
                  ),
                  code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                          <SyntaxHighlighter
                              style={okaidia}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                          >
                              {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                      ) : (
                          <code className={className} {...props}>
                              {children}
                          </code>
                      );
                  },
                  a: ({ node, ...props }) => (
                    <a {...props} target="_blank" rel="noopener noreferrer">
                        {props.children}
                    </a>
                    ),
                  img: ({ node, ...props }) => (
                      <img
                          {...props}
                          alt={props.alt || "Markdown Image"}
                          style={{ maxWidth: "100%", height: "auto" }} // Responsive images
                      />
                  ),
              }}
          >
              {markdownContent}
          </ReactMarkdown>
      </div>
  );
}
function MarkdownRendererString({ markdownContent }) {
 
  return (
    <div className="markdown-content">
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={okaidia}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )},
            img: ({ node, ...props }) => (
              <img
                  {...props}
                  alt={props.alt || "Markdown Image"}
                  style={{ maxWidth: "100%", height: "auto" }} // Responsive images
              />
          )
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}


function titleText(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export {titleText,MarkdownRenderer,MarkdownRendererString,useMarkdownStringSub};


function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="" element={<Home articles={articlesData} />} />
                    <Route path="home" element={<Home articles={articlesData} />} />

                    
                    <Route path="about" element={<About />} />
                    <Route
                        path="tags/:tag"
                        element={<TagList articles={articlesData} />}
                    />
                    <Route
                        path="articles/:slug"
                        element={<Article articles={articlesData} />}
                    />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
