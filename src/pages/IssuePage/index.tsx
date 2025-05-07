import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'

export function Issue() {
    return (
        <main className='w-full max-w-[55rem] p-4'>
            <div className='w-full bg-base-profile p-8 rounded-md flex flex-col gap-5 -mt-24'>
                <div className='text-blue text-link uppercase flex justify-between'>
                    <a href="" className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span>Voltar</span>
                    </a>
                    <a href="" className='flex gap-2 items-center'>
                        <span>Ver no github</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-base-title text-title-L'>JavaScript data types and data structures</span>
                    <div className='flex gap-8'>
                        <div className='flex items-center gap-1'>
                            <FontAwesomeIcon icon={faGithub} className='text-base-label' />
                            <span className='text-base-span'>cameronwll</span>
                        </div>

                        <div className='flex items-center gap-1'>
                            <FontAwesomeIcon icon={faCalendarDay} className='text-base-label' />
                            <span className='text-base-span'>Há 1 dia</span>
                        </div>

                        <div className='flex items-center gap-1'>
                            <FontAwesomeIcon icon={faComment} className='text-base-label' />
                            <span className='text-base-span'>5 comentários</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-8'>
                <div>
                    <p className='text-base-text'>
                        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                        <br />
                        <br />
                        Dynamic typing
                        <br />
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                    </p>
                </div>
            </div>
        </main>
    )
}