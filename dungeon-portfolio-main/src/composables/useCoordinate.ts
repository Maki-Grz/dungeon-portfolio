export default function () {
    const coordinate = useState('coordinate', () => ({latitude: 50, longitude: 75}));

    const setCoordinate = (latitude: number, longitude: number) => {
        coordinate.value.latitude = latitude;
        coordinate.value.longitude = longitude;
    };

    return {coordinate, setCoordinate};
}