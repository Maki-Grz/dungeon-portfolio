export default function () {
    const {closeSidebar} = useSidebar();
    const contact = useState('contact', () => false);

    const switchContact = () => {
        closeSidebar()
        useCoordinate().setCoordinate(75 + 15, 70 + 1.8)
        return contact.value = !contact.value;
    };

    return {contact, switchContact};
}