import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork, faEye, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faStar } from "@fortawesome/free-regular-svg-icons"

export function CardRepo() {
    return (
                <ul>
                                <li className='bg-base-profile p-6 rounded-md w-full max-w-[26rem] mt-4 flex flex-col gap-2'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-title-L text-base-title leading-title-L'>Money-manager</span>
                                        <a href={} className='flex items-center gap-2 leading-0 text-blue text-link'>
                                            Repo
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </a>
                                    </div>

                                    <div className='flex gap-6'>
                                        <p className='text-base-label font-bold'>
                                            Linguagem:
                                            <span className='text-base-text'> Typescript </span>
                                        </p>

                                        <p className='text-base-label font-bold'>
                                            Issues:
                                            <span className='text-base-text'> 0 </span>
                                        </p>
                                    </div>

                                    <div className='flex gap-6'>
                                        <span>
                                            <FontAwesomeIcon icon={faEye} className='text-base-label text-lg' />
                                            0
                                        </span>

                                        <span>
                                            <FontAwesomeIcon icon={faCodeFork} className='text-base-label text-lg' />
                                            0
                                        </span>

                                        <span>
                                            <FontAwesomeIcon icon={faStar} className='text-base-label text-lg' />
                                            0
                                        </span>
                                    </div>
                                </li>
                </ul>
    )
}