import React, { Component } from 'react';
import RecipeList from '../components/RecipesList';
import Search from '../components/Search';
import {recipeData} from '../data/tempList';


export default class Recipes extends Component {
    constructor(props){
        super(props)
        this.getRecipes = this.getRecipes.bind(this);
    }

    state = {
        recipes: recipeData,
        search:'',
        url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        baseUrl: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        query: '&q=',
        error: ''
    };

    componentDidMount(){
        this.getRecipes();
    }

    async getRecipes(){
        try{
            
            const data = await fetch(this.state.url);
            const jsonData = await data.json();

            if (jsonData.recipes.length === 0 ){
                this.setState({
                    error: "Sorry... No results for your search. Try agian or press search for the most popular recipes."
                })
            }else{
                this.setState({
                recipes: jsonData.recipes,
                error: ''
            })
            }
            
        }catch(error){
            console.log(error);
        }
    }

    handleChange = (e) =>{
        this.setState({
            search:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();   
        const { baseUrl, query, search}  = this.state;
        this.setState({
            url: `${baseUrl}${query}${search}`,
            search: ''
        }, () => this.getRecipes());
    }

    render() {
        return (
            <>
            <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

            {this.state.error ? (<section><div className="row"><div className="col"><h2 className="orangeText text-center text-uppercase mt-5">
                {this.state.error}
            </h2></div></div></section>) : (<RecipeList recipes={this.state.recipes}/>)}

                
            </>
        )
    }
}
