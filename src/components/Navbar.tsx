import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon as FAIcons } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);
    const [mobileScreen, setMobileScreen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setMobileScreen(window.innerWidth < 768);
            if (window.innerWidth > 768) {
                setOpenNav(false);
            }
        };

        // Initial setup
        handleResize();

        window.addEventListener('resize', handleResize);
        window.addEventListener('click', () => { setOpenNav(false); })
        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mobileScreen]);

    const openMobileNav = (event: React.MouseEvent<SVGSVGElement>) => {
        event.stopPropagation();
        setOpenNav(!openNav);
    }
    return (
        <nav className='bg-primary text-white'>
            <div className='w-100  flex justify-between  lg:container m-auto'>
                <div className='nav-item'>
                    <span className='text-xl font-semibold'><Link  className ='nav-link' to={'/'}> Assessment </Link></span>
                </div>
                <ul className={` ${mobileScreen ? `hidden` : `flex`}`}>
                    <li className='nav-item'><Link  className ='nav-link' to={'/'}> Home </Link></li>
                    <li className='nav-item'><Link  className ='nav-link' to={'/posts'}> Post </Link></li>
                </ul>
                <div className={`nav-link   ${mobileScreen ? `` : `hidden`}`}>
                    <FAIcons className=' cursor-pointer' icon={faBars} size={'xl'} onClick={openMobileNav} />
                </div>
            </div>
            <ul className={` bg-primary h-auto max-h-0 absolute right-3 w-52 ${openNav ? `!max-h-[200px]` : ``} md:hidden overflow-hidden transition-all duration-150 delay-[display, 150s]`}>
                <li className='nav-item '><Link className='nav-link' to={'/'}> Home </Link></li>
                <li className='nav-item '><Link className ='nav-link' to={'/posts'}> Post </Link></li>
            </ul>
        </nav>
    )
}
export default  Navbar
