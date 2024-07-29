import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const customStyles = {
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: 'none',
  }),
};

const Categories = ({ setSelectedSubSubCategory }) => {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSubSubCategoryLocal, setSelectedSubSubCategoryLocal] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://wooga.o-r.kr/products/categories/');
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const mainCategories = Object.keys(categories).map((key) => ({ value: key, label: key }));
  const subCategories =
    selectedMainCategory && categories[selectedMainCategory.value]
      ? Object.keys(categories[selectedMainCategory.value]).map((key) => ({ value: key, label: key }))
      : [];
  const subSubCategories =
    selectedSubCategory && categories[selectedMainCategory.value][selectedSubCategory.value]
      ? categories[selectedMainCategory.value][selectedSubCategory.value].map((item) => ({
          value: item,
          label: item,
        }))
      : [];

  const handleMainCategoryChange = (selectedOption) => {
    setSelectedMainCategory(selectedOption);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
    setSelectedSubSubCategoryLocal(null);
  };

  const handleSubCategoryChange = (selectedOption) => {
    setSelectedSubCategory(selectedOption);
    setSelectedSubSubCategory(null);
    setSelectedSubSubCategoryLocal(null);
  };

  const handleSubSubCategoryChange = (selectedOption) => {
    setSelectedSubSubCategory(selectedOption);
    setSelectedSubSubCategoryLocal(selectedOption);
  };

  return (
    <div className="categories-container">
      <div className="select-container">
        <Select
          placeholder="대분류 선택"
          value={selectedMainCategory}
          onChange={handleMainCategoryChange}
          options={mainCategories}
          styles={customStyles}
        />
      </div>
      {selectedMainCategory && (
        <div className="select-container">
          <Select
            placeholder="중분류 선택"
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
            options={subCategories}
            styles={customStyles}
          />
        </div>
      )}
      {selectedSubCategory && (
        <div className="select-container">
          <Select
            placeholder="소분류 선택"
            value={selectedSubSubCategoryLocal}
            onChange={handleSubSubCategoryChange}
            options={subSubCategories}
            styles={customStyles}
          />
        </div>
      )}
    </div>
  );
};

export default Categories;
