import React from 'react'

interface SearchBarProps {
    handleSearch: (searchTerm: string) => void;
  }

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(event.target.value); 
      };
     
  return (
    <input
    type="text"
    id="Search"
    placeholder="Search for..."
    className="w-full rounded-md border-gray-700 pe-10 shadow-sm sm:text-sm px-6 py-6"
    onChange={handleChange}
  /> 
  )
}

export default SearchBar
