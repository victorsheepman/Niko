
const getHash = function () {
    if (window.location.hash) {
        return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    }else{
        return '/';
    }
}
export default getHash;