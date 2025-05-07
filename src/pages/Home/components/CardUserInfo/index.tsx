import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export function CardUserInfo() {
    return (
                <main className='bg-base-profile p-8 rounded-md flex gap-8 w-full mt-4'>
                    <img src={} alt="Foto de perfil do usuário" className='w-37 rounded-md'/>
                    <div className='flex flex-col justify-between w-full'>
                        <div>
                            <div className='flex justify-between items-center mt-2'>
                                <span className='text-title-L text-base-title leading-title-L'>Matheus Gama</span>
                                <a 
                                href={} 
                                target='_blank'
                                className='flex items-center gap-2 leading-0 text-blue text-link'>
                                    <span className='uppercase'>github</span>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </a>
                            </div>
                            <p className='text-base-text mt-2'>
                            Desenvolvedor Front-end, aficionado por arquitetura escalável de interfaces e performance.
                            </p>
                        </div>
                        <div className='flex gap-6'>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faGithub} className='text-base-label text-lg' />
                                <span className='text-base-subtitle'>{MatheusJSGama}</span>
                            </div>

                            {company &&
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faBuilding} className='text-base-label text-lg' />
                                    <span className='text-base-subtitle'>{company}</span>
                                </div>
                            }

                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faUserGroup} className='text-base-label text-lg' />
                                <span className='text-base-subtitle'>0 seguidores</span>
                            </div>
                        </div>
                    </div>
                </main>
    )
}