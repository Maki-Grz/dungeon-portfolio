export default function () {
    const me = useState('me', () => false);

    const switchMe = () => {
        useSidebar().setSidebar(false, null)
        useCoordinate().setCoordinate(-100, -100)
        return me.value = !me.value;
    };

    return {me, switchMe};
}