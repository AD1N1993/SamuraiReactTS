import React, {useCallback, useEffect, useMemo, useState} from "react";
import {GetProfileType, profileAPI, usersAPI} from "../../api";


const useUsers = () =>{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const requestUsers = async () => {
            let result = await usersAPI.getUsers(2, 10);
            setUsers(result.items)
        }
        requestUsers()
    }, [])
    return users
}


export const UserManagementApp = () => {
    const users = useUsers();
    const [userId, setUserId] = useState<any>(null);
    console.log("UserManagementApp");

const onClick =useCallback((userId:number)=>{
    setUserId(userId)
},[])
    return <>
        <Users users={users} onClick={onClick}/>
        <Details userId={userId}/>
    </>
}
export const UserPublic = () => {
    const users = useUsers();
    console.log("UserPublic");

    return <>
        <Users users={users} onClick={()=>{}}/>
    </>
}
type userType = {
    name: string
    id: string
    photo: string
}
type usersPropsType = {
    users: userType[]
    onClick: (userId: number) => void
}
export const Users =React.memo( (props: usersPropsType) => {
    console.log("USersLSIT Rendered");
    return <>
        <ul>
            {props.users.map(u => <li onClick={() => props.onClick(+u.id)}>{u.name}</li>)}
        </ul>

    </>
})
type DetailsPropsType = {
    userId: number|null
}
export const Details = (props: DetailsPropsType) => {
    const [profile, setProfile] = useState(null)

    console.log("Deteils Rendered");

    useEffect(()=>{
        let resultObj:GetProfileType|null = null;

        const LoadProfile = async () => {
            if(props.userId === null)return
             resultObj = profileAPI.getProfile(props.userId);
            console.log(resultObj)
            let profile = await resultObj.resultPromise;
            setProfile(profile.data.fullName)
        }
        LoadProfile();
         return ()=>{
            resultObj?.cancel();
         }
    },[props.userId])

    return <>
        <div>
            {profile}
        </div>
    </>
}

