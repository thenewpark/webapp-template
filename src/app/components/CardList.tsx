"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[] | undefined> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const CardList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((posts) => setPosts(posts || []));
  }, []);

  return (
    <div className="container mx-auto xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
