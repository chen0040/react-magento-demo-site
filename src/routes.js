import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CategoriesPage from './components/category/CategoriesPage';
import CategoryPage from './components/category/CategoryPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="categories" component={CategoriesPage} />
        <Route path="categories/:id" component={CategoryPage} />
        <Route path="about" component={AboutPage} />
    
    </Route>
);