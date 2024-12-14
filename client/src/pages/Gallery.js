import React, { useEffect, useState } from 'react';
import { getData } from "../services/galaryService";
import Loader from "../components/Loader";
import { PageWrapper, Wrapper } from "../styles/EventsPage";

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const images = await getData();
            setImages(images);
        };
        fetchData();
    }, []);

    return (
        <Wrapper>
            <PageWrapper>
                {images.length > 0 ? (
                    images.map(image => (
                        <img
                            key={image.id}
                            src={image.url}
                            alt={`${image.id}`}
                            style={{ width: '300px', height: 'auto', margin: '10px' }}
                        />
                    ))
                ) : (
                    <Loader />
                )}
            </PageWrapper>
        </Wrapper>
    );
};

export default Gallery;


// import React, { useEffect, useState } from 'react';
// import { API_URL } from "../config/API_CONFIG";
// import {getData} from "../services/galaryService";
// import Loader from "../components/Loader";
// import {PageWrapper, Wrapper} from "../styles/EventsPage";
// const Gallery = () => {
//     const [events, setEvents] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await getData();
//             setEvents(data);
//         };
//         fetchData();
//     }, []);
//
//     return (
//         <Wrapper>
//             <PageWrapper>
//             {events.length > 0 ? (
//                 events.map(event => (
//                     <div key={event.id}>
//                         {event.attributes.media?.data?.length > 0 ? (
//                             <div>
//                                 {event.attributes.media.data.map((mediaItem) => (
//                                     <img
//                                         key={mediaItem.id}
//                                         src={`${API_URL}${mediaItem.attributes.url}`}
//                                         alt={mediaItem.attributes.alternativeText || event.attributes.title}
//                                         style={{ width: '300px', height: 'auto' }}
//                                     />
//                                 ))}
//                             </div>
//                         ) : (
//                             <p>No photos available</p>
//                         )}
//                     </div>
//                 ))
//             ) : (
//                 <Loader/>
//             )}
//             </PageWrapper>
//
//         </Wrapper>
//     );
// };
//
// export default Gallery;