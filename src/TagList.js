import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MarkdownRendererString, titleText } from "./App";
import "./TagList.css";

function TagList({ articles, isDarkMode }) {
    const { tag } = useParams(); // Get the tag from the URL
    const [previews, setPreviews] = useState([]); // Store fetched previews

    useEffect(() => {
        // Filter articles that include the given tag
        const filteredArticles = articles.filter((article) =>
            article.tags.includes(tag)
        );

        // Fetch and process Markdown content for each article
        const fetchPreviews = async () => {
            const previewData = await Promise.all(
                filteredArticles.map(async (article) => {
                    const response = await fetch(article.content); 
                    const markdownText = await response.text(); 
                    const previewText = markdownText.substring(0, 100) + "...";
                    return {
                        ...article,
                        markdownPreview: previewText, // Save preview
                    };
                })
            );
            setPreviews(previewData); // Update state with fetched previews
        };

        fetchPreviews(); // Call async function to fetch previews
    }, [tag, articles]); // Re-run if tag or articles change
    return (
        <div>
            <h1 className = "tagList_title">Tag: {titleText(tag)}</h1>
            <div className={`tagList ${isDarkMode ? "dark-mode" : ""}`}>
                

                {previews.length > 0 ? (
                    previews.map((article) => (
                        <div key={article.id} className="tagList_item">
                            <h2>{article.title}</h2>
                            <MarkdownRendererString markdownContent={article.markdownPreview}></MarkdownRendererString>
                            <Link to={`/articles/${article.slug}`} className="read-more">
                                Read More
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No articles found for this tag.</p>
                )}
            </div>
        </div>
        
    );
}

export default TagList;
