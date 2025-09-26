import useCoordinate from "~/composables/useCoordinate";

export default function useSidebar() {
    const sidebar = useState('sidebar', () => ({showing: false, title: ""}));
    const {coordinate} = useCoordinate();

    function openSidebar(title: string, lat?: number, lng?: number) {
        if (lat && lng) {
            coordinate.value.latitude = lat + 15;
            coordinate.value.longitude = lng + 1.8;
        }

        if (sidebar.value.showing) {
            sidebar.value.showing = false;
            sidebar.value.title = title;
            setTimeout(() => {
                sidebar.value.showing = true;
            }, 700);
        } else {
            sidebar.value.showing = true;
            sidebar.value.title = title;
        }
    }

    function closeSidebar() {
        sidebar.value.showing = false;
        useCoordinate().setCoordinate(75 + 15, 70 + 1.8)
    }

    return {sidebar, openSidebar, closeSidebar};
}