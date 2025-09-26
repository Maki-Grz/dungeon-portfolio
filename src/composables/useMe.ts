export default function () {
    const {closeSidebar} = useSidebar();
    const me = useState('me', () => false);

    const switchMe = () => {
        closeSidebar()
        useCoordinate().setCoordinate(75 + 15, 70 + 1.8)
        return me.value = !me.value;
    };

    return {me, switchMe};
}