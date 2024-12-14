import React, { useEffect, useState } from 'react';
import { getData } from "../services/galaryService";
import Loader from "../components/Loader";
import { PageWrapper, Wrapper } from "../styles/EventsPage";

const Gallery = ({ directory }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const images = await getData(directory);
                setImages(images);
            } catch (error) {
                console.error('Ошибка при загрузке галереи:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [directory]);

    return (
        <Wrapper>
            <PageWrapper>
                {loading ? (
                    <Loader />
                ) : images.length > 0 ? (
                    images.map(image => (
                        <img
                            key={image.url}
                            src={image.url}
                            alt={`${image.id}`}
                            style={{ width: '300px', height: 'auto', margin: '10px' }}
                        />
                    ))
                ) : (
                    <p>Нет изображений для отображения</p>
                )}
            </PageWrapper>
        </Wrapper>
    );
};

export default Gallery;
