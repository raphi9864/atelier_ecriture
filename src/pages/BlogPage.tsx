import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageHeader = styled.div`
  background-color: var(--beige);
  padding: 80px 0 40px;
  text-align: center;
`;

const PageTitle = styled.h1`
  margin-bottom: 1rem;
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const BlogMainContent = styled.div``;

const BlogSidebar = styled.div``;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogCategory = styled.span`
  display: inline-block;
  background-color: var(--light-green);
  color: var(--dark-green);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`;

const BlogTitle = styled.h3`
  margin-bottom: 0.8rem;
  
  a {
    color: var(--dark-brown);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--green);
    }
  }
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: var(--gray);
  margin-bottom: 1rem;
`;

const BlogAuthor = styled.span`
  margin-right: 1rem;
`;

const BlogDate = styled.span``;

const BlogExcerpt = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--dark-green);
  }
  
  &::after {
    content: ' →';
    display: inline-block;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(4px);
  }
`;

const SidebarSection = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const SidebarTitle = styled.h3`
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background-color: var(--light-green);
    margin-top: 0.5rem;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    display: flex;
    justify-content: space-between;
    color: var(--dark-brown);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--green);
    }
  }
`;

const CategoryCount = styled.span`
  background-color: var(--light-beige);
  color: var(--brown);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
`;

const CategoryLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--dark-brown);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--green);
  }
`;

const PopularPostList = styled.ul`
  list-style: none;
`;

const PopularPostItem = styled.li`
  margin-bottom: 1.2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PopularPostLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--dark-brown);
  text-decoration: none;
  
  &:hover {
    color: var(--green);
  }
`;

const PopularPostImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PopularPostTitle = styled.h4`
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
`;

const PopularPostDate = styled.span`
  font-size: 0.8rem;
  color: var(--gray);
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const PageButton = styled.button<{ isActive?: boolean }>`
  background-color: ${props => props.isActive ? 'var(--green)' : 'var(--light-beige)'};
  color: ${props => props.isActive ? 'white' : 'var(--dark-brown)'};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 0.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.isActive ? 'var(--dark-green)' : 'var(--beige)'};
  }
  
  &.prev, &.next {
    width: auto;
    padding: 0 1rem;
    border-radius: 20px;
  }
`;

// Types
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
}

interface Category {
  name: string;
  count: number;
}

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Exemple de données pour les articles de blog
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "L'Art de l'Écriture Créative",
      slug: "art-ecriture-creative",
      category: "Techniques d'écriture",
      excerpt: "Découvrez les fondamentaux de l'écriture créative...",
      author: "Sophie Martin",
      date: "12 Mars 2024"
    },
    {
      id: 2,
      title: "Développer son Style d'Écriture",
      slug: "developper-style-ecriture",
      category: "Style",
      excerpt: "Comment trouver et affiner sa voix unique...",
      author: "Jean Dupont",
      date: "10 Mars 2024"
    },
    {
      id: 3,
      title: "L'Art du Dialogue en Fiction",
      slug: "art-dialogue-fiction",
      category: "Techniques Narratives",
      excerpt: "Maîtrisez les subtilités des dialogues pour rendre vos scènes plus dynamiques et révéler la personnalité de vos personnages.",
      author: "Sophia Lambert",
      date: "20 avril 2023"
    }
  ];
  
  // Exemple de données pour les catégories
  const categories: Category[] = [
    { name: "Conseils d'Écriture", count: 12 },
    { name: "Techniques Narratives", count: 8 },
    { name: "Caractérisation", count: 6 },
    { name: "Poésie", count: 5 },
    { name: "Édition et Publication", count: 4 }
  ];
  
  // Exemple de données pour les articles populaires
  const popularPosts: BlogPost[] = [
    {
      id: 1,
      title: "Les Secrets du Storytelling",
      slug: "secrets-storytelling",
      category: "Conseils d'Écriture",
      excerpt: "",
      author: "Claire Dubois",
      date: "15 Mars 2024"
    },
    {
      id: 5,
      title: "Les structures narratives qui captivent",
      slug: "structures-narratives-captivantes",
      category: "Techniques Narratives",
      excerpt: "",
      author: "Marc Lefort",
      date: "28 février 2023"
    },
    {
      id: 6,
      title: "Écrire des descriptions sensorielles immersives",
      slug: "descriptions-sensorielles",
      category: "Techniques Narratives",
      excerpt: "",
      author: "Sophia Lambert",
      date: "15 février 2023"
    }
  ];
  
  return (
    <>
      <PageHeader>
        <div className="container">
          <PageTitle>Blog de l'Écriture Créative</PageTitle>
          <p>Conseils, techniques et inspiration pour nourrir votre pratique d'écriture.</p>
        </div>
      </PageHeader>
      
      <BlogContainer>
        <BlogLayout>
          <BlogMainContent>
            <BlogGrid>
              {blogPosts.map(post => (
                <BlogCard key={post.id}>
                  <BlogContent>
                    <BlogCategory>{post.category}</BlogCategory>
                    <BlogTitle>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </BlogTitle>
                    <BlogMeta>
                      <BlogAuthor>Par {post.author}</BlogAuthor>
                      <BlogDate>{post.date}</BlogDate>
                    </BlogMeta>
                    <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                    <ReadMoreLink to={`/blog/${post.slug}`}>Lire la suite</ReadMoreLink>
                  </BlogContent>
                </BlogCard>
              ))}
            </BlogGrid>
            
            <Pagination>
              <PageButton className="prev">Précédent</PageButton>
              <PageButton isActive={currentPage === 1} onClick={() => setCurrentPage(1)}>1</PageButton>
              <PageButton isActive={currentPage === 2} onClick={() => setCurrentPage(2)}>2</PageButton>
              <PageButton isActive={currentPage === 3} onClick={() => setCurrentPage(3)}>3</PageButton>
              <PageButton className="next">Suivant</PageButton>
            </Pagination>
          </BlogMainContent>
          
          <BlogSidebar>
            <SidebarSection>
              <SidebarTitle>Catégories</SidebarTitle>
              <CategoryList>
                {categories.map((category, index) => (
                  <CategoryItem key={index}>
                    <CategoryLink to={`/blog/categorie/${category.name.toLowerCase()}`}>
                      {category.name}
                      <CategoryCount>{category.count}</CategoryCount>
                    </CategoryLink>
                  </CategoryItem>
                ))}
              </CategoryList>
            </SidebarSection>
            
            <SidebarSection>
              <SidebarTitle>Articles Populaires</SidebarTitle>
              <PopularPostList>
                {popularPosts.map(post => (
                  <PopularPostItem key={post.id}>
                    <PopularPostLink to={`/blog/${post.slug}`}>
                      <div>
                        <PopularPostTitle>{post.title}</PopularPostTitle>
                        <PopularPostDate>{post.date}</PopularPostDate>
                      </div>
                    </PopularPostLink>
                  </PopularPostItem>
                ))}
              </PopularPostList>
            </SidebarSection>
          </BlogSidebar>
        </BlogLayout>
      </BlogContainer>
    </>
  );
};

export default BlogPage; 