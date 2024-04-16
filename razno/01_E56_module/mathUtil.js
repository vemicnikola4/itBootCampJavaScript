//mozemo da koristimo ovaj kod u bilo kojem drugom js fajlu ali moramo da im dodamo export keyword

export const PI = 3.1451;

export function getCir(radius){
    return 2* PI *radius;
}
export function getArea(radius){
    return 2 * radius * radius;
}

export function getVolume(radius){
    return (4/3) * PI * (radius * radius * radius);
}