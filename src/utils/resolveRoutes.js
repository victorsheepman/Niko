const resolveRoutes = (route) => {
    if (route == 'car') {
        let validRoute =  '/:car';

        return validRoute;

    }else{

        let validRoute = '/';
        
        return validRoute;
    }
    return `/${route}`;
}

export default resolveRoutes;