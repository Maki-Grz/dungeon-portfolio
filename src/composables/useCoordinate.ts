export default function () {
    const coordinate = useState('coordinate', () => ({latitude: 0, longitude: 0}));

    const setCoordinate = (latitude: number, longitude: number) => {
        coordinate.value.latitude = latitude;
        coordinate.value.longitude = longitude;
    };

    return {coordinate, setCoordinate};
}