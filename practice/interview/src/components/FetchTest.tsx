import { useState, useEffect } from 'react';

import UserProfile from './UserProfile';

const FetchTest = () => {

    const [pageNum, setPageNum] = useState(1);
    const [userList, setUserList] = useState<any>([]);

    const fetchData = async (page: number = 1) => {

        const response = await fetch(`https://randomuser.me/api?page=${page}`)
        const json = await response.json()
        const userData = json.results[0]

        const user = {
            name: `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
            location: `${userData.location.city}, ${userData.location.country}`,
            img: userData.picture.medium
        }

        // When using old state to create new state -> do it in a function!
        setUserList((prevList: any) => {
            return [...prevList, user]
        })
    }

    // Fetch data on page load as well
    useEffect(() => {
        fetchData();
    }, [])

    return <>
        <button onClick={()=>{return fetchData(1)}}>Get New User</button>
        <button onClick={()=>{setPageNum(pageNum + 1); return fetchData(pageNum)}}>Get Next User</button>

        <ul>
            {userList.length > 0 && userList.map((user: any) => {
                return <UserProfile name={user.name} location={user.location} img={user.img} key={user.name}/>
            })
            }
        </ul>
    </>;
}

export default FetchTest;