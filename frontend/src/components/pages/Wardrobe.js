import React, {useState, useEffect} from "react";
import '../../index.css';

const Wardrobe = () => {
    const {id} = useState();
    const [data, setData] = useState([]);
    const [click, setClick] = useState("");
    const [Have, setHave] = useState(false);
    const urlWardrobe = "http://localhost:8080/wardrobe/all";
    const btn = document.querySelectorAll("button");

    //PUT method
    const iHaveThat = (e) => {
        
        e.preventDefault();
        const finalFormEndpointUpdate = "http://localhost:8080/wardrobe/update/" + id;
        const updatedData = {
            "have" : Have
        };

        fetch(finalFormEndpointUpdate, {
            method: "PATCH",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })
            .then((response) => {
            return response.json();
            });
    }

    //GET method
    const fetchInfo = async () => {
        await fetch(urlWardrobe)
          .then((res) => res.json())
          .then((d) => setData(d));
      };
      useEffect(() => {
        fetchInfo();
      }, []);


    const clicked = (e) => {
        setClick(e.target.id);
        console.log(btn);
    }

    const checkHave = () => {
        setHave(!Have);
    }

    //display default categories
    function displayByCategory(style){
        let category = [];
        data.filter((item)=>{
            if(item.style.includes(style)){
                category.push(item);
            }
        })
        const displayCategory = category.map((clothing)=>{
            return (
                <div key={clothing.id} className="clothing-description">
                    <div>
                        <label>{`${clothing.style} ${clothing.type}`}</label>
                        <input type="checkbox" id="Have" checked={Have} onChange={checkHave} />
                        <button  id={clothing.id} type="submit" onClick={clicked}>Have It</button>
                    </div>
            </div>
            )
        })
        return displayCategory;
    }

    //HTML
    return (
        <div>
            <div className="sticky">
                <h1>My Wardrobe</h1>   
            </div>
            
            <form onSubmit={iHaveThat} method='PATCH'>
            <button type="submit">Save</button>
                <h3>Dressy</h3>
                {displayByCategory("dressy")}
                <h3>Suit</h3>
                {displayByCategory("suit")}
            </form>
        </div>
    )

}

export default Wardrobe;