import React, {useState, useEffect} from "react";
import '../../index.css';

const Wardrobe = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [Have, setHave] = useState();
    const urlWardrobe = "http://localhost:8080/wardrobe/all";

    //PUT method
    function iHaveThat() {
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
            })
            .then((updatedDate) => {});
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

    function displayByCategory(style){
        let category = [];
        data.filter((item)=>{
            if(item.style.includes(style)){
                category.push(item);
            }
            
        })
        
        const displayCategory = category.map((clothing)=>{
            return (
                <div key={clothing.id}>
                <label id={clothing.id}>{`${clothing.style} ${clothing.type}`}</label>
                <label> Have It
                    <input type="checkbox" name={clothing.id}/>
                    </label>
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
        <form onSubmit={iHaveThat}>
        <button type="submit">Save</button>
            <h3>Dressy</h3>
            {displayByCategory("dressy")}
            <h3>Suit</h3>
            {displayByCategory("suit")}
        </form>

        
       
        {/* {displaySuit}
        {displayDressy} */}
        {/* <div className="suit">
            <h2>Suit</h2>
            <div className="sub-suit">
                <h3>Suit Coat</h3>
                <label>Color: 
                    <select>
                        <option value="black">Black</option>
                        <option value="black">Blue</option>
                        <option value="black">Grey</option>
                    </select>
                </label>
                <label>Have It
                    <input type="checkbox" name="suit-coat" />
                </label>
            </div>
            <div className="sub-suit">
                <h3>Suit pants</h3>
                <label>Color: 
                    <select>
                        <option value="black">Black</option>
                        <option value="black">Blue</option>
                        <option value="black">Grey</option>
                    </select>
                </label>
                <label>Have It
                    <input type="checkbox" name="suit-pants" />
                </label>
            </div>
            <div className="sub-suit">
                <h3>Tie</h3>
                <label>Color: 
                    <select>
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="grey">Grey</option>
                        <option value="Red">Red</option>
                        <option value="polka-dots">Polka Dots</option>
                        <option value="strips">Strips</option>
                    </select>
                </label>
                <label>Have It
                    <input type="checkbox" name="tie" />
                </label>
            </div>
            <div className="sub-suit">
                <h3>White button-up</h3>
                <label>Color: 
                    <select>
                        <option value="black" selected>White</option>
                    </select>
                </label>
                <label>Have It
                    <input type="checkbox" name="dress-shoes" />
                </label>
            </div>
        </div>
        <div className="shirts">
            <h2>Shirts</h2>
            <div className="shirt-collection">
               <h3>Shirt 1</h3>
                <label>Color: 
                    <select>
                        <option value="black">Black</option>
                        <option value="black">Blue</option>
                        <option value="black">Grey</option>
                    </select>
                </label>
                <label>Have It
                    <input type="checkbox" name="shirt" />
                </label>
            </div>
            <div className="shirt-collection">
               <h3>Shirt 2</h3>
                <label>Color: 
                    <select>
                        <option value="black">Black</option>
                        <option value="black">Blue</option>
                        <option value="black">Grey</option>
                    </select>
                </label>
                <label>Have It
                    <input type="checkbox" name="shirt 2" />
                </label>
            </div>
            <div className="shirt-collection">
               <h3>Shirt 3</h3>
                <label>Color: 
                    <select>
                        <option value="black">Black</option>
                        <option value="black">Blue</option>
                        <option value="black">Grey</option>
                    </select>
                </label>
                <label>Have It
                    <input type="checkbox" name="shirt 3" />
                </label>
            </div>
            <div className="shirt-collection">
               <h3>Shirt 4</h3>
                <label>Color: 
                    <select>
                        <option value="black">Black</option>
                        <option value="black">Blue</option>
                        <option value="black">Grey</option>
                    </select>
                </label>
                <label>Have It
                    <input type="checkbox" name="shirt 4" />
                </label>
            </div>
            <div className="shirt-collection">
               <h3>Shirt 5</h3>
                <label>Color: 
                    <select>
                        <option value="black">Black</option>
                        <option value="black">Blue</option>
                        <option value="black">Grey</option>
                    </select>
                </label>
                <label>Have It
                    <input type="checkbox" name="shirt 5" />
                </label>
            </div>
            <div className="shirt-collection">
               <h3>Shirt 6</h3>
                <label>Color: 
                    <select>
                        <option value="black">Black</option>
                        <option value="black">Blue</option>
                        <option value="black">Grey</option>
                    </select>
                </label>
                <label>Have It
                    <input type="checkbox" name="shirt6" />
                </label>
            </div>
        </div>
        <div className="pants">
            <h2>Pants</h2>
            <h3></h3>
        </div>
        <div className="socks">
            <h2>Socks</h2>
            <h3></h3>
        </div>
        <div className="underwear">
            <h2>Underwear</h2>
            <h3></h3>
        </div>
        <div className="sleepwear">
            <h2>Sleepwear</h2>
            <h3></h3>
        </div>
        <div className="belt">
            <h2>Belts</h2>
            <h3></h3>
        </div> */}

        </div>
    )

}

export default Wardrobe;