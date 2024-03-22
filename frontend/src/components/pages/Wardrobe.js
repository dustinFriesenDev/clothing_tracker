import React, {useState, useEffect} from "react";
import '../../index.css';
import { type } from "@testing-library/user-event/dist/type";

const Wardrobe = () => {
    const [id, setId] = useState("");
    const [data, setData] = useState([]);
    const [click, setClick] = useState("");
    const [amount, setAmount] = useState();
    const [color, setColor] = useState();
    const [have, setHave] = useState();
    const [season, setSeason] = useState();
    const [size, setSize] = useState();
    const [style, setStyle] = useState();
    const [typeOfItem, setTypeOfItem] = useState();
    const urlWardrobe = "http://localhost:8080/wardrobe/all";
    const btn = document.querySelectorAll("button");

    //PUT method
    const iHaveThat = (e) => {
        e.preventDefault();
        const finalFormEndpointUpdate = "http://localhost:8080/wardrobe/update/" + id;
        const updatedData = {
            //add other columns to keep information the same. add useState to set state for each variable.
            "amount" : amount,
            "color" : color,
            "have" : have,
            "season" : season,
            "size" : size,
            "style" : style,
            "type" : typeOfItem 
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
        setId(e.target.id);
        setAmount(e.target.parentElement.childNodes[1].id)
        setColor(e.target.parentElement.childNodes[2].id)
        setSeason(e.target.parentElement.childNodes[3].id)
        setSize(e.target.parentElement.childNodes[4].id)
        setStyle(e.target.parentElement.childNodes[5].id)
        setTypeOfItem(e.target.parentElement.childNodes[0].id)
        if(click === e.target.id){
            setHave(!have);
        }
    }

    const checkHave = (e) => {
        if(click === e.target.id){
            setHave(!have);
            e.target.checked = have;
        }
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
                <form key={clothing.id} onSubmit={iHaveThat} method="PATCH">
                <div  className="clothing-description">
                    <div>
                        <label id={clothing.type}>{`${clothing.style} ${clothing.type}`}</label>
                        <label id={clothing.amount}> {clothing.amount}</label>
                        <label id={clothing.color}> {clothing.color}</label>
                        <label id={clothing.season}> {clothing.season}</label>
                        <label id={clothing.size} hidden></label>
                        <label id={clothing.style}> {clothing.style}</label>
                        <input type="checkbox" id={clothing.id} checked={clothing.have} onChange={checkHave} onClick={clicked} />
                        <button type="submit">Save</button>
                    </div>
                </div>
                </form>
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
            
            
            <button type="submit">Save</button>
                <h3>Dressy</h3>
                {displayByCategory("dressy")}
                <h3>Suit</h3>
                {displayByCategory("suit")}
            
        </div>
    )

}

export default Wardrobe;