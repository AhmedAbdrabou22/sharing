// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import { useDrag, useDrop } from 'react-dnd';
// import { ItemTypes } from './ItemTypes';

// const CustomizedLinks = () => {
//     const [links, setLinks] = useState([]);
//     const handleSave = () => {
//         // Logic to save links
//         localStorage.setItem('customLinks', JSON.stringify(links));
//         console.log("Saving links:", links);
//     };
    

//     // const handleAddLink = () => {
//     //     setLinks(prevLinks => [...prevLinks, { id: prevLinks.length }]);
//     // };
//     const handleAddLink = () => {
//         setLinks(prevLinks => [...prevLinks, { id: prevLinks.length, platform: '', link: '' }]);
//     };
    

//     const moveLink = (dragIndex, hoverIndex) => {
//         const draggedLink = links[dragIndex];
//         const newLinks = [...links];
//         newLinks.splice(dragIndex, 1);
//         newLinks.splice(hoverIndex, 0, draggedLink);
//         console.log('New Links:', newLinks); // Debugging: Check newLinks array after reordering
//         setLinks(newLinks);
//     };

//     const handleRemoveLink = (idToRemove) => {
//         setLinks(prevLinks => prevLinks.filter(link => link.id !== idToRemove));
//     };

//     React.useEffect(() => {
//         const savedLinks = JSON.parse(localStorage.getItem('customLinks'));
//         if (savedLinks) {
//             setLinks(savedLinks);
//         }
//     }, []);

//     return (
//         <div className='font mt-5 p-4' style={{ background: "white", borderRadius: "10px" }}>
//             <div>
//                 <div>
//                     <p className='fs-3'>Customize Your Links</p>
//                     <span>Add/Edit/remove links below and the share..... </span>
//                 </div>
//                 <button className='btn addLink w-75' onClick={handleAddLink}> + Add New Link</button>
//             </div>

//             {links.map((link, index) => (
//                 <Link key={link.id} index={index} id={link.id} moveLink={moveLink} removeLink={handleRemoveLink} />
//             ))}

//             {links.length > 0 && (
//                 <button className='btn  saveLinks' onClick={handleSave}>Save</button>
//             )}
//         </div>
//     );
// };

// const Link = ({ index, id, moveLink, removeLink }) => {
//     const ref = React.useRef(null);

//     const [, drop] = useDrop({
//         accept: ItemTypes.LINK,
//         hover(item, monitor) {
//             if (!ref.current) {
//                 return;
//             }
//             const dragIndex = item.index;
//             const hoverIndex = index;
//             if (dragIndex === hoverIndex) {
//                 return;
//             }
//             moveLink(dragIndex, hoverIndex);
//             item.index = hoverIndex;
//         },
//     });

//     const [{ isDragging }, drag] = useDrag({
//         type: ItemTypes.LINK,
//         item: { id, index },
//         collect: (monitor) => ({
//             isDragging: monitor.isDragging(),
//         }),
//     });

//     drag(drop(ref));

//     const handleRemoveLink = () => {
//         removeLink(id);
//     };

//     return (
//         <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
//             {/* Your link content */}
//             <div key={id} className='w-100 p-3 bodyLinks mt-4'>
//                 <div className='d-flex justify-content-between align-items-center'>
//                     <p>Link #{index + 1}</p>
//                     <p style={{cursor:"pointer"}} onClick={handleRemoveLink}>Remove</p>
//                 </div>
//                 <div className='p-4'>
//                     <div className=''>
//                         <label>Platform</label>
//                         <Form.Select aria-label="Default select example">
//                             <option hidden>Select Platform</option>
//                             <option value="Github">Github</option>
//                             <option value="YouTube">YouTube</option>
//                             <option value="FaceBook">FaceBook</option>
//                         </Form.Select>
//                     </div>
//                     <div className='mt-3'>
//                         <label>Link</label>
//                         <br></br>
//                         <Form.Control aria-label="First name" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomizedLinks;

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const CustomizedLinks = () => {
    const [links, setLinks] = useState([]);

    const handleSave = () => {
        localStorage.setItem('customLinks', JSON.stringify(links));
        console.log("Saving links:", links);
    };

    const handleAddLink = () => {
        setLinks(prevLinks => [...prevLinks, { id: prevLinks.length, platform: '', link: '' }]);
    };

    const moveLink = (dragIndex, hoverIndex) => {
        const draggedLink = links[dragIndex];
        const newLinks = [...links];
        newLinks.splice(dragIndex, 1);
        newLinks.splice(hoverIndex, 0, draggedLink);
        setLinks(newLinks);
    };

    const handleRemoveLink = (idToRemove) => {
        setLinks(prevLinks => {
            const updatedLinks = prevLinks.filter(link => link.id !== idToRemove);
            localStorage.setItem('customLinks', JSON.stringify(updatedLinks));
            return updatedLinks;
        });
    };
    

    React.useEffect(() => {
        const savedLinks = JSON.parse(localStorage.getItem('customLinks'));
        if (savedLinks) {
            setLinks(savedLinks);
        }
    }, []);

    return (
        <div className='font mt-5 p-4' style={{ background: "white", borderRadius: "10px" }}>
            <div>
                <div>
                    <p className='fs-3'>Customize Your Links</p>
                    <span>Add/Edit/remove links below and the share..... </span>
                </div>
                <button className='btn addLink w-75' onClick={handleAddLink}> + Add New Link</button>
            </div>

            {links.map((link, index) => (
                <Link key={link.id} index={index} id={link.id} moveLink={moveLink} removeLink={handleRemoveLink} link={link} setLinks={setLinks} />
            ))}

            {links.length > 0 && (
                <button className='btn  saveLinks' onClick={handleSave}>Save</button>
            )}
        </div>
    );
};

const Link = ({ index, id, moveLink, removeLink, link, setLinks }) => {
    const ref = React.useRef(null);

    const [, drop] = useDrop({
        accept: ItemTypes.LINK,
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            moveLink(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.LINK,
        item: { id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    const handleRemoveLink = () => {
        removeLink(id);
    };

    const handlePlatformChange = (e) => {
        const newPlatform = e.target.value;
        setLinks(prevLinks => {
            const updatedLinks = [...prevLinks];
            updatedLinks[index].platform = newPlatform;
            return updatedLinks;
        });
    };

    const handleLinkChange = (e) => {
        const newLink = e.target.value;
        setLinks(prevLinks => {
            const updatedLinks = [...prevLinks];
            updatedLinks[index].link = newLink;
            return updatedLinks;
        });
    };

    return (
        <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
            {/* Your link content */}
            <div key={id} className='w-100 p-3 bodyLinks mt-4'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Link #{index + 1}</p>
                    <p style={{cursor:"pointer"}} onClick={handleRemoveLink}>Remove</p>
                </div>
                <div className='p-4'>
                    <div className=''>
                        <label>Platform</label>
                        <Form.Select aria-label="Default select example" onChange={handlePlatformChange} value={link.platform}>
                            <option hidden>Select Platform</option>
                            <option value="Github">Github</option>
                            <option value="YouTube">YouTube</option>
                            <option value="FaceBook">FaceBook</option>
                        </Form.Select>
                    </div>
                    <div className='mt-3'>
                        <label>Link</label>
                        <br></br>
                        <Form.Control aria-label="First name" value={link.link} onChange={handleLinkChange} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizedLinks;
