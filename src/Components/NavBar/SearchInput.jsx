import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { useState} from 'react'

function SearchInput(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        props.setIsSearchOn(true)
    
    };
    return (
        <>
            <InputGroup className="ml-2 border-0 flex-nowrap fixWidth-sm">
                <InputGroup.Prepend>
                    <InputGroup.Text className="searchIcon border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" datasupporteddps="24x24" fill="currentColor" width="20" height="20" focusable="false">
                            <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                        </svg>                        </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    className="d-none d-md-block searchInput border-0 pl-0"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Search"
                    onClick={handleShow}
                    onChange={(e) => console.log(e.target.value)}
                    onMouseLeave={()=>props.setIsSearchOn(false)}
                />

            </InputGroup>
        </>
    )
}

export default SearchInput
