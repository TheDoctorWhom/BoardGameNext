import classes from './search.module.css';
import { useRef } from 'react';

function Search(props){

    const searchTextInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const searchText = searchTextInputRef.current.value;

        props.onSearch(searchText, props.data);
    }

    return(
        <form className={classes.form}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='searchtext'>Search</label>
                    <input type='text' id='searchtext' name='searchtext' ref={searchTextInputRef} />
                </div>
            </div>
        </form>
    );
}

export default Search;