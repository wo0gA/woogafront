import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentalCategoryPage from "../components/RentalCategoryPage";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SERVER_URL = "server.templ.es";

const CategoryPage = () => {
  const navigate = useNavigate();
	const location = useLocation();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedProducts, setSelectedProducts] = useState(null);

	const updateCategoryParam = (categoryName) => {
		const searchParams = new URLSearchParams(location.search);
    // if (searchParams.has("keyword")) { //중복도 가능하게
    //   searchParams.delete("keyword");
    // }
		searchParams.set("category", categoryName);
		navigate(`?${searchParams.toString()}`);
	};

	useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");
    const keywordParam = searchParams.get("keyword");
    const orderParam = searchParams.get("order");

    let query = [];
    if (categoryParam) query.push(`category=${categoryParam}`);
    if (keywordParam) query.push(`keyword=${keywordParam}`);
    if (orderParam) query.push(`order=${orderParam}`);

    const queryString = query.join('&');
    
    if (queryString) {
      fetchProducts(queryString);
    } else {
      setSelectedProducts(null);
    }
  }, [location.search]);

  const fetchProducts = async (queryString) => {
    try {
      const response = await axios.get(`https://${SERVER_URL}/products/?${queryString}`);
      setSelectedProducts(response.data);
    } catch (err) {
      setSelectedProducts([]);
    }
  };
  return (
    <Wrapper>
      <Header>
        
      </Header> 

      <RentalCategoryPage
      searchTerm={searchTerm}
      selectedItem={selectedItem}
      onItemSelect={updateCategoryParam} 
      selectedProducts={selectedProducts}/>
      <Footer>
       
      </Footer>
    </Wrapper>
  )
}

export default CategoryPage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  /* padding-left: 100px;
  padding-right: 100px; */
`;
