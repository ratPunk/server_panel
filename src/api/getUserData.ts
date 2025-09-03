import axios from 'axios';

type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
};

export const fetchRandomUser = async (): Promise<User> => {
    const DogArray = ["036feed0-da8a-42c9-ab9a-57449b530b13", "dd9362cc-52e0-462d-b856-fccdcf24b140", "1460844f-841c-4de8-b788-271aa4d63224", "e7e99424-d514-4b56-9f0c-05736f6dd22d", "667c7359-a739-4f2b-abb4-98867671e375", "5328d59b-b4e4-48e9-98ec-0545c66c4385", "f72528b5-a5d7-4a17-b709-aba2db722307", "4524645f-dda7-4031-9272-dee29f5f91ea", "e1c0664d-aa61-4c85-970d-6c86ba197bee", "8355b9c9-3724-477d-858a-c1c1c0f1743f"];

    try {
        const rndNum = Math.floor(Math.random() * 9) + 1;
        console.log('Получаем пользователя с ID:', rndNum);

        const DogBreed = DogArray[rndNum];

        const response = await axios.get(`https://dogapi.dog/api/v2/breeds/${DogBreed}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка загрузки пользователя:', error);
        throw error; // Пробрасываем ошибку для обработки в компоненте
    }
};