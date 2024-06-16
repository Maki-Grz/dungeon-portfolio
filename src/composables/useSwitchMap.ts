export default function () {
    const map = useState('map', () => true);

    const switchMap = () => {
        useState('sidebar', () => ({showing: false, title: "START COAST"}));
        useCoordinate().setCoordinate(-100, -100)
        return map.value = !map.value;
    };

    return {map, switchMap};
}