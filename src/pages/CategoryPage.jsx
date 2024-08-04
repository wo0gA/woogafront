import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentalCategoryPage from "../components/RentalCategoryPage";
import CategoryComponent from "../components/CategoryComponent";
import axios from "axios";

const SERVER_URL = "server.templ.es";

const CategoryPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [selectedItem, setSelectedItem] = useState(null);
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
		} else if (keywordParam) {
			fetchProducts("keyword", keywordParam);
			setSelectedItem(keywordParam);
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
			<Header></Header>

			<CategoryComponent onItemSelect={updateCategoryParam} />
			{selectedItem && <RentalCategoryPage selectedItem={selectedItem} />}
			<Footer></Footer>
		</Wrapper>
	);
};

export default CategoryPage;

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
