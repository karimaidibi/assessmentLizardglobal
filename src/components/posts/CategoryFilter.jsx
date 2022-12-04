import React, { useState } from 'react';
import './CategoryFilter.css';
import { Link } from 'react-router-dom';

const CategoryFilter = ({posts}) => {

    // init
    const [selectedCategories, setSelectedCategories] = useState([]);
    
    // get all the categories of the posts with no duplicates
    const uniqueCategories = [...new Set(posts.flatMap(post => post.categories.map(category => category.name)))];

    /*handle click on a category filter
    * if the category is already selected, we remove it from the selectedCategories array
    * else we add it to the selectedCategories array
    * update the state
    */
    const handleCategoryChange = (categoryName) => {
        const newSelectedCategories = [...selectedCategories];
        if (selectedCategories.includes(categoryName)) {
            const index = selectedCategories.indexOf(categoryName);
            newSelectedCategories.splice(index, 1);
        } else {
            newSelectedCategories.push(categoryName);
        }
        setSelectedCategories(newSelectedCategories);
    };

    /**
     * return true if the post has at least one category in the selectedCategories array
     */
    const filteredPosts = posts.filter((post) => {
        if (selectedCategories.length === 0) {
            return true;
        }
        return post.categories.some((category) => selectedCategories.includes(category.name));
    });

    /*
    * Create the list of categories to display in the UI from the uniqueCategories array
    * if the box is checked, it means the category is in the selectedCategories array
    */
    const uniqueCategoriesInputList = Array.from(uniqueCategories).map((category) => (
            <div className="list-group-item" key={category}>
            <input className='form-check-input me-1'
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                key={category}
            />
            <p>{category}</p>
            </div>
    ));

    // render UI
    return (
        <div className="category-filter-container m-5">
            {/*list of categories for filtering*/}
            <div className='mt-4'>
                <h3>Category Filter : </h3>
                <div className="list-group">
                    {uniqueCategoriesInputList}
                </div>
            </div>
            {/* Posts display */}
            {/*The posts*/}
            <div className="mt-4 ProduitsDiv">
                {/*row*/}
                <div className="m-4 row row-cols-2 row-cols-lg-2 g-2 g-lg-5">  
                    {/*column*/}
                    {filteredPosts.map((post) => (
                        <div className="col" >
                            <div className="box bg-body shadow-lg border hover13" key={post.id}>
                                {/*Router on click go to post detail*/}      
                                <div className="cursorr">
                                    <Link to={`/posts/${post.id}`}> 
                                        <figure><img src={post.author.avatar} className="img-fluid" alt="..."></img></figure> 
                                    </Link>
                                </div>
                                {/*Infos*/}
                                <h4 className="pt-3">{post.author.name}</h4>
                                <p>{post.title}</p>
                                <p>{post.summary}</p>
                                <p>{post.publishDate}</p>
                                {/*Router on click go to post detail*/}
                                <Link to={`/posts/${post.id}`}> 
                                    <button type="button" className="btn btn-dark text-white mb-4">Details</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryFilter;