import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  const [posts, setPosts] = useState([]);

  const fetchBlogs = async () => {
    const apiUrl = process.env.REACT_APP_BE_URL;
    const resp = await fetch(`${apiUrl}/blogPosts`);
    const data = await resp.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
