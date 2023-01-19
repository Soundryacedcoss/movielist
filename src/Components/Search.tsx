import React from 'react'
export const Search = () => {
    return (
        <div className=' mb-3' style={{ margin: "16% 4%" }}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    )
}
