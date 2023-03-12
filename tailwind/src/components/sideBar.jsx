import { FaFireAlt, FaCut, FaHorseHead, FaKey, FaRocket, FaSkullCrossbones } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div
            className=" fixed top-0 left-0 h-screen w-40
                        flex flex-col
                        bg-gray-800 text-white shadow-lg"
        >
            <SideBarIcon icon={<FaFireAlt size="36"/>}/>
            <SideBarIcon icon={<FaCut size="36"/>}/>
            <SideBarIcon icon={<FaHorseHead size="36"/>}/>
            <SideBarIcon icon={<FaKey size="36"/>}/>
            <SideBarIcon icon={<FaRocket size="36"/>}/>
            <SideBarIcon icon={<FaSkullCrossbones size="36"/>}/>
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => {
    return <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>;
};

export default SideBar;

