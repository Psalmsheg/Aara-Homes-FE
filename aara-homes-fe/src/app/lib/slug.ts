export function getSlug( val: string ){

    if( val.includes("localhost") ){
        return "smooth-2024"
    }

    return val?.split('.')[0];

}

export function getBaseUrl( val: string ){

    console.log( val );

    if( val.includes("sandbox"))
        return "https://sbxapi.smoothballot.com";

    if( val === "smooth-2024" )
        return "https://sbxapi.smoothballot.com"

    else return "https://api.smoothballot.com"

}