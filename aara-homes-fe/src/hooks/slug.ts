import { useEffect, useState } from "react";

export function useSlug(){

    const [slug, setSlug] = useState('')

    useEffect(()=>{
        console.log( window.location.host);

        const host = window.location.host;

        setSlug( host.includes("localhost") ? "smooth-2024" : host.split('.')[0]  );

        console.log( slug )

    }, [])

    return slug;
    // return "smooth-2024"

}
