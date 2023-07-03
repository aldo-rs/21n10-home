const PHOTOS = [
    {
        id: '6e6f1ec6-3ea6-4f42-aa98-28e1d5cec332',
        src: new URL(
            '../assets/images/appartment/20230510_125536.jpg?as=webp&width=2000',
            import.meta.url
        ),
        width: 2916,
        height: 2018,
        alt: 'test image 1',
    },
    {
        id: 'de8858c0-5e93-4021-a93a-3839ebfc2920',
        src: new URL(
            '../assets/images/appartment/living-room-2.jpg?as=webp&width=1620',
            import.meta.url
        ),
        width: 1950,
        height: 1300,
        alt: 'test image 2',
        isACoverPhoto: true
    },
    {
        id: '1c6394bf-7395-4855-a1df-1f31de3fa396',
        src: new URL(
            '../assets/images/appartment/room-1.jpg?as=webp&width=1620',
            import.meta.url
        ),
        width: 1950,
        height: 1300,
        alt: 'test image 2',
        isACoverPhoto: true
    },
    {
        id: '2e917e63-44ae-415a-b109-d3447982db1b',
        src: new URL(
            '../assets/images/appartment/20230510_135408.jpg?as=webp&width=1620',
            import.meta.url
        ),
        width: 2268,
        height: 4032,
        alt: 'test image 2',
        isACoverPhoto: false
    },
    {
        id: '625ea834-b6c2-4ba5-ad6e-bad0566a70f1',
        src: new URL(
            '../assets/images/appartment/room-2.jpg?as=webp&width=1620',
            import.meta.url
        ),
        width: 1950,
        height: 1300,
        alt: 'test image 2',
        isACoverPhoto: true
    },
    {
        id: '579e82c0-5b0c-496e-a306-ecb0b57ca893',
        src: new URL(
            '../assets/images/appartment/20230510_085451.jpg?as=webp&width=1890',
            import.meta.url
        ),
        width: 1890,
        height: 3360,
        alt: 'test image 2',
        isACoverPhoto: true
    }
];

const photoRepository = {
    findAll() {
        return PHOTOS;
    },
    findCoverPhotos() {
        return PHOTOS.filter(photo => photo.isACoverPhoto);
    },
};

export { photoRepository };