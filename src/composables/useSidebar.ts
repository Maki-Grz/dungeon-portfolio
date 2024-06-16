export default function () {
    const sidebar = useState('sidebar', () => ({showing: false, title: "START COAST"}));

    const setSidebar = (showing: boolean, title: string) => {
        sidebar.value.showing = showing;
        sidebar.value.title = title;
    };

    return {sidebar, setSidebar};
}