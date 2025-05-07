export function IssueCard(){
    return(
        <div className="max-w-[26rem] p-8 flex flex-col gap-5 bg-base-post rounded-md max-h-[16.25rem] overflow-hidden mb-8">
            <div className="flex justify-between items-baseline gap-4">
                <span className="text-title-M text-base-title max-w-[283px]">JavaScript data types and data structures</span>
                <span className="text-S text-base-span ">Há 1 dia</span>
            </div>
            <p className="text-base-text text-M line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
            </p>
        </div>
    )
}