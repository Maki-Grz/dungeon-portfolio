export default function () {
    const me = useState('me', () => false);

    const switchMe = () => {
        useState('sidebar', () => ({showing: false, title: "START COAST"}));
        useCoordinate().setCoordinate(-100, -100)
        return me.value = !me.value;
    };

    return {me, switchMe};
}