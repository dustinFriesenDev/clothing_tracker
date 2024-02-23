import React from "react";

const Wardrobe = () => {
    return (
        <>
        <h1>My Wardrobe</h1>
        <div className="suit">
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
        </>
    )

}

export default Wardrobe;