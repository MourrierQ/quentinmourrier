import React, {useState, useEffect} from 'react'


const useScroll = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollOps = window.pageYOffset;
            setVisible(currentScrollOps <= prevScrollPos)
        }
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return [visible];

}

export default useScroll;