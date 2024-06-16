export default function () {
    const map = useState('map', () => true);

    const switchMap = () => {
        useSidebar().setSidebar(false, null)
        useCoordinate().setCoordinate(-100, -100)
        return map.value = !map.value;
    };

    return {map, switchMap};
}