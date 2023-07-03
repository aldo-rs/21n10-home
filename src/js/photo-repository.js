const PHOTOS = [
    {
        id: '0308bb50-e281-442a-adbc-48448a79476a',
        src: new URL(
            '../assets/images/appartment/0308bb50-e281-442a-adbc-48448a79476a.jpg?as=webp&width=5264',
            import.meta.url
        ),
        width: 5264,
        height: 3616,
        isCoverPhoto: true
    },
    {
        id: 'de8858c0-5e93-4021-a93a-3839ebfc2920',
        src: new URL(
            '../assets/images/appartment/de8858c0-5e93-4021-a93a-3839ebfc2920.jpg?as=webp&width=5248',
            import.meta.url
        ),
        width: 5248,
        height: 3632,
        isCoverPhoto: true
    },
    {
        id: '3896651e-9c76-41eb-9a85-65f0f7e4aeae',
        src: new URL(
            '../assets/images/appartment/3896651e-9c76-41eb-9a85-65f0f7e4aeae.jpg?as=webp&width=4032',
            import.meta.url
        ),
        width: 4032,
        height: 2268
    },
    {
        id: 'be395825-a160-476e-82ac-b7b4d04155fe',
        src: new URL(
            '../assets/images/appartment/be395825-a160-476e-82ac-b7b4d04155fe.jpg?as=webp&width=4032',
            import.meta.url
        ),
        width: 4032,
        height: 2268
    },
    {
        id: 'ecdc9a17-641f-4b85-b1aa-45ae4423455c',
        src: new URL(
            '../assets/images/appartment/ecdc9a17-641f-4b85-b1aa-45ae4423455c.jpg?as=webp&width=2268',
            import.meta.url
        ),
        width: 2268,
        height: 4032
    },
    {
        id: 'd6e065bd-401f-40be-a5f0-d54aa24d9150',
        src: new URL(
            '../assets/images/appartment/d6e065bd-401f-40be-a5f0-d54aa24d9150.jpg?as=webp&width=2268',
            import.meta.url
        ),
        width: 2268,
        height: 4032,
        isCoverPhoto: true
    },
    // room 1
    {
        id: '6fc07897-44e4-4a78-b108-39108ddb39d0',
        src: new URL(
            '../assets/images/appartment/6fc07897-44e4-4a78-b108-39108ddb39d0.jpg?as=webp&width=4032',
            import.meta.url
        ),
        width: 4032,
        height: 2268,
        isCoverPhoto: true
    },
    {
        id: '9dcc4383-7cea-4e9f-8a7c-7ac9dc8c20e6',
        src: new URL(
            '../assets/images/appartment/9dcc4383-7cea-4e9f-8a7c-7ac9dc8c20e6.jpg?as=webp&width=4080',
            import.meta.url
        ),
        width: 4080,
        height: 3840
    },
    {
        id: '220ebb8a-72b7-473d-aabf-40222ea07348',
        src: new URL(
            '../assets/images/appartment/220ebb8a-72b7-473d-aabf-40222ea07348.jpg?as=webp&width=2268',
            import.meta.url
        ),
        width: 2268,
        height: 4032
    },
    {
        id: '3c62445b-ad7f-48e3-9f19-cbf60ff45532',
        src: new URL(
            '../assets/images/appartment/3c62445b-ad7f-48e3-9f19-cbf60ff45532.jpg?as=webp&width=4352',
            import.meta.url
        ),
        width: 4352,
        height: 3840
    },
    // room 2
    {
        id: 'd7708f91-928c-4d1d-bb32-2a964052da55',
        src: new URL(
            '../assets/images/appartment/d7708f91-928c-4d1d-bb32-2a964052da55.jpg?as=webp&width=3024',
            import.meta.url
        ),
        width: 3024,
        height: 4016
    },
    {
        id: '9daeeb37-9123-45b8-a990-0c7dc813face',
        src: new URL(
            '../assets/images/appartment/9daeeb37-9123-45b8-a990-0c7dc813face.jpg?as=webp&width=2268',
            import.meta.url
        ),
        width: 2268,
        height: 4032
    },
    {
        id: 'd614f27d-5d7e-4da3-b19e-c315d5a57d08',
        src: new URL(
            '../assets/images/appartment/d614f27d-5d7e-4da3-b19e-c315d5a57d08.jpg?as=webp&width=3688',
            import.meta.url
        ),
        width: 3688,
        height: 3840
    },
    // bathroom
    {
        id: '80bf8da4-e825-4e34-b69b-807551a09049',
        src: new URL(
            '../assets/images/appartment/80bf8da4-e825-4e34-b69b-807551a09049.jpg?as=webp&width=2268',
            import.meta.url
        ),
        width: 2268,
        height: 4032
    },
    {
        id: '10cbde8a-36d1-4abe-a30c-575499b158a0',
        src: new URL(
            '../assets/images/appartment/10cbde8a-36d1-4abe-a30c-575499b158a0.jpg?as=webp&width=2268',
            import.meta.url
        ),
        width: 2268,
        height: 4032
    },
    {
        id: 'b2eae67d-f71a-4178-a593-6cc4f674db9f',
        src: new URL(
            '../assets/images/appartment/b2eae67d-f71a-4178-a593-6cc4f674db9f.jpg?as=webp&width=2268',
            import.meta.url
        ),
        width: 2268,
        height: 4032
    },
    // dining room
    {
        id: 'c487414b-b84f-4d41-bae2-2d812dea084d',
        src: new URL(
            '../assets/images/appartment/c487414b-b84f-4d41-bae2-2d812dea084d.jpg?as=webp&width=2268',
            import.meta.url
        ),
        width: 2268,
        height: 4032
    },
    {
        id: '50845662-e052-464f-9226-01f51b5c8bda',
        src: new URL(
            '../assets/images/appartment/50845662-e052-464f-9226-01f51b5c8bda.jpg?as=webp&width=4032',
            import.meta.url
        ),
        width: 4032,
        height: 2268
    },
    {
        id: '1830228b-f566-4ca0-ab0c-19f14921f90e',
        src: new URL(
            '../assets/images/appartment/1830228b-f566-4ca0-ab0c-19f14921f90e.jpg?as=webp&width=4032',
            import.meta.url
        ),
        width: 4032,
        height: 2268
    },
    {
        id: '6469436c-dc70-40f9-abd9-dcdc44b9f407',
        src: new URL(
            '../assets/images/appartment/6469436c-dc70-40f9-abd9-dcdc44b9f407.jpg?as=webp&width=3683',
            import.meta.url
        ),
        width: 3683,
        height: 2059
    },
];

const photoRepository = {
    findAll() {
        return PHOTOS;
    },
    findCoverPhotos() {
        return PHOTOS.filter(photo => photo.isCoverPhoto);
    },
};

export { photoRepository };