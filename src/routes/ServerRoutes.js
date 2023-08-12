class BaseRoute{
    static base_route = 'http://localhost:8000/';
    static media_route = this.base_route + 'media/';
    static store_rotue = this.base_route + 'store/'
}

class Routes extends BaseRoute{
    static user_route = this.base_route + 'user/';
    static category_route = this.store_rotue + 'category/';
    static product_route = this.store_rotue + 'product/';
    static cart_routes = this.store_rotue + 'cart/';
    static order_routes = this.store_rotue + 'order/';
}

class UserRoutes extends Routes{
    static base_route = this.user_route;
    static login_route = this.user_route + 'login/';
    static register_route = this.user_route + 'register/';
}

export default {
    BaseRoute,
    Routes,
    UserRoutes,
}