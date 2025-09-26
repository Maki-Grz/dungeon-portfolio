export default function () {
    const {closeSidebar} = useSidebar();
    const map = useState('map', () => true);

    const switchMap = () => {
        closeSidebar()
        useCoordinate().setCoordinate(-100, -100)
        return map.value = !map.value;
    };

    return {map, switchMap};
}