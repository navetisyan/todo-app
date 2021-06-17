import React, {useState, useEffect} from 'react'

function SearchBar(props) {

  const [term, setTerm] = useState('');

  useEffect(()=> {

    const handle = setTimeout(()=> {
      props.onSubmit(term);
    },2000);

    return () => {
      clearTimeout(handle);
    }


  }, [term]);


    return (
      <div className="search-form">
          <div className="field">
            <input
              type="text"
              placeholder="Search in Todo list" 
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
      </div>
    );

}

export default SearchBar;
