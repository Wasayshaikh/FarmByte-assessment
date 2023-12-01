import React from 'react'
import { FontAwesomeIcon as FAIcons } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

export default function Navbar(): JSX.Element {
    const [openNav, setOpenNav] = React.useState<boolean>(false);
    const [mobileScreen, setMobileScreen] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleResize = () => {
            setMobileScreen(window.innerWidth < 960);
        };

        // Initial setup
        handleResize();

        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mobileScreen]);

    const openMobileNav = () => {
        setOpenNav(!openNav);
    }
    return (
        <nav>
            <div className='w-100  flex justify-between p-2'>
                <div className='p-2'>
                    <span className='text-lg'>Nav Heading</span>
                </div>
                <ul className={` ${mobileScreen ? `hidden` : `flex`}`}>
                    <li className='p-2'><a href="#">Home</a></li>
                    <li className='p-2'><a href="#">Post</a></li>
                </ul>
                <div className={`p-2   ${mobileScreen ? `` : `hidden`}`}>
                    <FAIcons className=' cursor-pointer' icon={faBars} size={'xl'} onClick={openMobileNav} />
                </div>
            </div>
            <ul className={`px-4 bg-green-300 h-auto max-h-0 ${openNav ? `!max-h-[200px]` : ``} overflow-hidden transition-all duration-150 delay-[display, 150s]`}>
                <li className='p-2 cursor-pointer'>asd</li>
                <li className='p-2 cursor-pointer'>asd</li>
            </ul>
        </nav>
    )
}
