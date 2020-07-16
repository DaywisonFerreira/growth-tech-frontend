import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import avatarImg from '../../assets/avatar.png';

import {
  Container,
  Content,
  FilterContent,
  Button,
  PostList,
  PostItem
} from './styles';

interface Post {
  id: number;
  name: string;
  company: {
    name: string;
  };
  posts: [
    {
      id: number,
      userId: number,
      title: String,
      body: string
    }
  ];
  avatar: string;

}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsFiltered, setPostsFiltered] = useState<Post[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [active, setActive] = useState('')

  async function loadPosts() {
    const filterPost: Array<string> = [];
    const response = await api.get('/posts');
    const postFormatted = response.data.map((post: Post) => (
      filterPost.push(post.company.name),
      {
        id: post.id,
        name: post.name,
        company: {
          name: post.company.name
        },
        posts: [...post.posts]
    }))
    setFilters(filterPost)
    setPosts(postFormatted)
    setPostsFiltered(postFormatted)
  }

  useEffect(() => {
    loadPosts();
  }, [])

  const handleFilter = (filter: string) => {
    if(filter === active) {
      setPostsFiltered(posts)
      setActive('')
      return;
    }
    const filterPosts = posts.filter((post) => {
      return post.company.name === filter
    })
    setPostsFiltered(filterPosts)
    setActive(filter)
  }

  return <Container>
    <Content>
      <FilterContent>
        <span>Filtros:</span>
        {filters.length > 0 && filters.map((filter) => (
          <Button
            active={filter === active}
            onClick={() => handleFilter(filter)}>{filter}
          </Button>
        ))}
      </FilterContent>
      <PostList>
        {postsFiltered && postsFiltered.map((post) => (
          <>
          {post.posts.map((postAuthor) => (
            <PostItem key={postAuthor.id}>
                <img src={avatarImg} alt=""/>
              <div>
                <p><span>{post.name}</span> - {post.company.name}</p>
                <p>{postAuthor.body}</p>
              </div>
            </PostItem>
          ))}
          </>
        ))}
      </PostList>
    </Content>
  </Container>
}

export default Posts;
