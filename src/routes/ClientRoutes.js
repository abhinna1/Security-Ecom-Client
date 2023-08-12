class Routes{
    static home_route = '/';
    static user_route = '/user';
    static admin_route = '/admin';
    static product_route = '/product';
    static cart_route = '/cart';
    static NOT_FOUND_404 = '/404_Not_Found';
}


class UserRoutes extends Routes{
    static base_route = this.user_route;
    static login_route = this.user_route + '/login';
    static register_route = this.user_route + '/register';
}

class ProductRoutes extends Routes{
    static base_route = this.product_route;
    static product_detail_route = (id)=>this.product_route + '/' + id;
    // static register_route = this.user_route + '/register';
}



class AdminRoutes extends Routes{
    static base_route = this.admin_route;
    static admin_product_route = this.admin_route + '/product';
}

export default {
    Routes,
    UserRoutes,
    AdminRoutes,
    ProductRoutes,
};