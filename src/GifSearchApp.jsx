import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifSearchApp = () => {

    const [categories, setCategories] = useState( ['Valorant'] );

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories])
    };
    
    return (
        <>

            <h1>GifSearchApp</h1>

            <AddCategory 
                onNewCategory={ event => onAddCategory(event) }
            />
              
            
            { categories.map( category => 
                <GifGrid 
                    key={category}
                    category={ category }/>
                ) 
            }
            
        </>
    );
};
