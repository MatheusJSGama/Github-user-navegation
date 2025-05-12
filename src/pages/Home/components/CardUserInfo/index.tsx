import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { UserContext } from '../../../../context/userContext'
import { formatedNumber } from "../../../../utils"
export function CardUserInfo() {

    const { userInfos } = useContext(UserContext)
    const data = userInfos.userData

    return (
        <>
            {userInfos.userData &&
                <main className='bg-base-profile p-4 xxxsm:p-8 rounded-md flex flex-col xsm:flex xsm:flex-row gap-8 w-full mt-4'>
                    <img src={data?.avatar_url} alt="Foto de perfil do usuário" className='w-37 h-37 tablet:rounded-md self-center rounded-[50%]'/>
                    <div className='flex flex-col justify-between w-full'>
                        <div>
                            <div className='flex justify-between items-center mt-2'>
                                <span className='text-title-L text-base-title leading-title-L'>{data?.name}</span>
                                <a 
                                href={data?.html_url} 
                                target='_blank'
                                className='flex items-center gap-2 leading-0 text-blue text-link'>
                                    <span className='uppercase'>github</span>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </a>
                            </div>
                            <p className='text-base-text mt-2'>
                                {data?.bio}
                            </p>
                        </div>
                        <div className='mt-2 xxsm:flex  gap-6'>
                            <div className='flex items-center justify-center gap-2'>
                                <FontAwesomeIcon icon={faGithub} className='text-base-label text-lg' />
                                <span className='text-base-subtitle'>{data?.login}</span>
                            </div>

                            {data?.company &&
                                <div className='flex items-center justify-center gap-2'>
                                    <FontAwesomeIcon icon={faBuilding} className='text-base-label text-lg' />
                                    <span className='text-base-subtitle'>{data.company}</span>
                                </div>
                            }

                            <div className='flex items-center justify-center gap-2'>
                                <FontAwesomeIcon icon={faUserGroup} className='text-base-label text-lg' />
                                <span className='text-base-subtitle'>{formatedNumber(data?.followers)} seguidores</span>
                            </div>
                        </div>
                    </div>
                </main>
            }
        </>

    )
}