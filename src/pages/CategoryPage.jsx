import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentalCategoryPage from "../components/RentalCategoryPage";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SERVER_URL = "server.templ.es";

const CategoryPage = () => {
  const navigate = useNavigate;
	const location = useLocation();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);

	const updateCategoryParam = (categoryName) => {
		const searchParams = new URLSearchParams(location.search);
		searchParams.set("category", categoryName);
		navigate(`?${searchParams.toString()}`);
	};

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const categoryParam = searchParams.get("category");
		const keywordParam = searchParams.get("keyword");
		if (categoryParam) {
			fetchProducts("category", categoryParam);
			setSelectedItem(categoryParam);
      setSearchTerm('')
		} else if (keywordParam) {
			fetchProducts("keyword", keywordParam);
			setSearchTerm(keywordParam);
      setSelectedItem('')
		}
	}, [location.search]);

	const fetchProducts = async (param, categoryName) => {
		const trimmedName = categoryName.replaceAll(" ", "");
		try {
			const response = await axios.get(
				`https://${SERVER_URL}/products/?${param}=${trimmedName}`
			);
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
      onItemSelect={updateCategoryParam} />
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
