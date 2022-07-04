import {productAPI} from "../api/api";
import Page404 from "../Pages/Page404/Page404";


const SET_PRODUCT_ITEM_INFO = "tour2sky/productItemInfo/SET_PRODUCT_ITEM_INFO";


const  initialState = {
    id: 1,
    user_id: 0,
    name: "Концерт JAH KHALIB",
    link: "concert-JAH-KHALIB",
    created_at: "2022-01-16T14:46:03.000000Z",
    price: 30,
    duration: 120,
    description: "Интересный концерт в лучшем зале города",
    status: 1,
    rating: 4.2,
    seo_title: null,
    seo_description: null,
    index_status: 1,
    attributes: {
        data: [
            {
                id: 1,
                service_id: 1,
                attribute_id: 1,
                name: "Питание",
                value: "За отдельную плату",
                description: "Бла бла бла"
            },
            {
                id: 2,
                service_id: 1,
                attribute_id: 2,
                name: "Ночлег",
                value: "Какой ночлег, это же просто концерт)",
                description: "Бла бла бла"
            }
        ]
    },
    categories: {
        data: [
            {
                id: 1,
                service_id: 1,
                category_id: 1,
                name: "Концерты"
            },
            {
                id: 2,
                service_id: 1,
                category_id: 2,
                name: "Звезды"
            }
        ]
    },
    images: {
        data: [
            {
                id: 1,
                name: "concert-1.jpeg",
                mime_type: "image/jpeg",
                link: "https://tour2sky.silvito.com.ua/storage/images/service/concert-1.jpeg",
                thumb: "https://tour2sky.silvito.com.ua/storage/images/service/thumb/concert-1.jpeg"
            },
            {
                id: 3,
                name: "concert-3.jpeg",
                mime_type: "image/jpeg",
                link: "https://tour2sky.silvito.com.ua/storage/images/service/concert-3.jpeg",
                thumb: "https://tour2sky.silvito.com.ua/storage/images/service/thumb/concert-3.jpeg"
            }
        ],
    },
    currency: {
        id: 1,
        name: "Доллар США",
        code: "USD",
        rate: "1.00",
        status: 1
    },
    country: null,
    region: null,
    city: {
        id: 1,
        region_id: 1,
        name: "Одесса",
        link: "odessa",
        status: 1,
        seo_title: null,
        seo_description: null,
        index_status: 1,
        created_at: "2022-01-16T14:40:41.000000Z",
        seo_image: null
    },
    location: null,
    seo_image: null,
    times: {
        data: [
            {
                id: 1,
                service_id: 1,
                date: null,
                time: "21:00:00",
                day_of_week: 6,
                day_of_month: null,
                month: null,
                status: 1
            },
            {
                id: 2,
                service_id: 1,
                date: null,
                time: "21:00:00",
                day_of_week: null,
                day_of_month: 10,
                month: 3,
                status: 1
            }
        ]
}};


const productItem_Reducer = (state=initialState, action)=>{

    switch (action.type) {

        case SET_PRODUCT_ITEM_INFO:{
            return {
               ...action.data.data
            }
        }
        default:
            return state
    }
}

export const setProductItemView = (data) =>({type:SET_PRODUCT_ITEM_INFO,data});

/*This is Thunk*/
export const getProductItemView = (itemId,token) => async (dispatch) => {
        let response = await productAPI.getServiceItemView(itemId,token)
        if (response.status === 200) {
            dispatch(setProductItemView(response.data))

        } else {
            return <Page404/>
        }
}
export default productItem_Reducer