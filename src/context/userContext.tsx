import { createContext, ReactNode, useState } from "react";
import { api } from "../lib/axios";

interface UserProviderProps {
    children: ReactNode
}

interface UserContextProviderProps {
    fetchUserData: (data: FetchUserProps) => Promise<void>
    userInfos: UserInfos
}

interface FetchUserProps {
    userName: string
}

interface UserInfos {
    userData: GitHubUserData | null
    userRepos: GitHubUserRepos[] | null
}

interface GitHubUserData {
    name: string
    avatar_url: string
    bio: string
    company: string | null
    html_url: string
    login: string 
    followers: number
}

interface GitHubUserRepos {
    name: string
    html_url: string
    open_issues: number
    updated_at: string
    forks: number
    watchers: number
    stargazers_count: number
    language: string
    id: number
}




export const UserContext = createContext({} as UserContextProviderProps)

export function UserProvider({children}: UserProviderProps) {
    const [userInfos, setUserInfos] = useState(
        {
            userData: null,
            userRepos: null,
        }
    )

    console.log(userInfos);
    

    async function fetchUserData(data: FetchUserProps){
        console.log(data);
        
        const responseUserProfileInfos  = await api.get(data.userName)
        const responseUserReposInfos = await api.get(`${data.userName}/repos`)
        
        
        setUserInfos({
            userData: responseUserProfileInfos.data,
            userRepos: responseUserReposInfos.data
        })
    }

    return (
        <UserContext.Provider value={{fetchUserData, userInfos}}>
            {children}
        </UserContext.Provider>
    )
}