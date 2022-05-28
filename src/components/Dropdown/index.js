import React from 'react';

import ListItems  from '../ListItems';
import './style.css';

const Dropdown = ({ listItems }) => {
    const [selectedValue, setSelectedValue] = React.useState(listItems && listItems.length > 0 ? listItems[0] : '');
    const [showList, setShowList] = React.useState(false);
    const ref = React.useRef(null);

    const onListItemChanged = (e) => {
        setSelectedValue(e)
        setShowList(false)
    }

    React.useEffect(() => {
        const handler = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowList(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [showList]);

    return (
        <>
            <div onClick={(() => { if (listItems && listItems.length > 1) setShowList(!showList) })} className='dropdown' style={{ fontFamily: selectedValue }}>
                {selectedValue}&nbsp;
            </div>
            <ul style={{ display: showList ? 'inline-block' : 'none' }} className='listContainer' ref={ref} >
                <ListItems listItems={listItems} selectedListItem={selectedValue} onListItemChanged={onListItemChanged}></ListItems>
            </ul>
        </>
    )
}

export default Dropdown;