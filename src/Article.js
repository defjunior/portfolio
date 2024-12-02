import './Article.css';
import Header from './Header';
import Footer from './Footer';
import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { titleText } from './App';
import { MarkdownRenderer } from './App';

function Article({ articles, isDarkMode }) {
    const { slug } = useParams();
    const article = articles.find((a) => a.slug === slug);
    const [headings, setHeadings] = useState([]);

    if (!article) {
        return <h1>Article Not Found</h1>;
    }

    const handleContentLoaded = (extractedHeadings) => {
        setHeadings(extractedHeadings);
    };

    return (
        <div className={`article ${isDarkMode ? 'dark-mode' : ''}`}>

         
            <div className="article_top">
            <div className="toc">
                <h2>Table of Contents</h2>
                <ul>
                    {headings.map((heading, index) => (
                        <li
                            key={index}
                            style={{ marginLeft: `${(heading.level - 1) * 20}px` }}
                        >
                            <a
                                href={`#${heading.id}`}
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default anchor behavior
                                    const element = document.getElementById(heading.id);
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

              <h1 className="article_title">{article.title}</h1>
                  <h2 className="article_title">{`${article.date}`}</h2>
                  <h3 className="article_title">{`By ${article.author}`}</h3>
                  
                  <div className="Tags">
                      <ul className="tag_list">
                          {article.tags.map((tag, index) => (
                              <Link
                                  key={index}
                                  to={`/tags/${tag.toLowerCase()}`}
                                  className="tag"
                              >
                                  {titleText(tag)}
                              </Link>
                          ))}
                      </ul>
                  </div>
                 
            
            </div>

            
              
                <div className={`content ${isDarkMode ? 'dark-mode' : ''}`}>
                    <MarkdownRenderer
                        filePath={article.content}
                        onContentLoaded={handleContentLoaded} // Pass callback to extract headings
                    />
                </div>
        
           
            <div className="returnButton">
                <a href="#/home" className="button-36">Return Home</a>
                <a href="#top" className="button-36">Back to Top</a>
            </div>

            <Footer />
        </div>
    );
}

export default Article;
