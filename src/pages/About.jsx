	
	
import React from 'react';
import queryString from "query-string";
 
export default function About(props) {
    //const search = new URLSearchParams(props.location.search);
    //console.log(search.get('name'));
    const query = queryString.parse(props.location.search);
    const { name } = query;
    console.log(name);
  return <div>
        <h2>About 페이지 입니다.</h2>
        {name && <p>name는 {name}</p>}
      </div>;
}