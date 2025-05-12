import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork, faEye, faArrowUpRightFromSquare, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { useContext } from 'react'
import { UserContext } from '../../../../context/userContext'
import { formatDistanceToNowStrict } from "date-fns"
import { ptBR } from 'date-fns/locale'
import { formatedNumber } from '../../../../utils/index'

export function CardRepo() {
    const { userInfos } = useContext(UserContext)
    const repos = userInfos.userRepos

    return (
        <>
            {userInfos.userRepos &&
                <ul className='w-full grid tablet:grid-cols-2 mt-4 gap-4 sm:'>
                    {repos?.map(repo => {

                        const createDateRelativeFromNow = formatDistanceToNowStrict(repo.updated_at
                            , {
                            locale: ptBR,
                        })

                        return (
                            <li key={repo.id} className='bg-base-profile p-4 xxxsm:p-6 rounded-md flex flex-col gap-2'>
                                <div className='flex justify-between items-start'>
                                    <span className='text-title-L text-base-title leading-title-L max-w-[13rem]'>{repo.name}</span>
                                    <a href={repo.html_url} className='flex gap-2  items-center leading-0 text-blue text-link'>
                                        Repo
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </a>
                                </div>

                                <div className='flex gap-3'>
                                    <p className='text-base-label font-bold'>
                                        Linguagem:
                                        <span className='text-base-text'> {repo.language} </span>
                                    </p>

                                    <p className='text-base-label font-bold'>
                                        Issues:
                                        <span className='text-base-text'> {repo.open_issues} </span>
                                    </p>
                                </div>

                                <div className='flex flex-col xxxsm:flex-row justify-between'>
                                    <div className='flex gap-4'>
                                        <span className='flex items-center gap-2'>
                                            <FontAwesomeIcon icon={faEye} className='text-base-label text-lg mb-0.5' />
                                            {formatedNumber(repo.watchers)}
                                        </span>

                                        <span className='flex items-center gap-2'>
                                            <FontAwesomeIcon icon={faCodeFork} className='text-base-label text-lg' />
                                            {formatedNumber(repo.forks)}
                                        </span>

                                        <span className='flex items-center gap-2'>
                                            <FontAwesomeIcon icon={faStar} className='text-base-label text-lg mb-0.5' />
                                            {formatedNumber(repo.stargazers_count)}
                                        </span>
                                    </div>
                                    <span className='mt-1'> <FontAwesomeIcon icon={faRotateRight} className='text-base-label text-lg'/> {createDateRelativeFromNow}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            }
        </>
    )
}