export default function () {
    const sidebar = useState('sidebar', () => false);

    const setSidebar = (showing: boolean) => {
        sidebar.value = showing;
    };

    return {sidebar, setSidebar};
}