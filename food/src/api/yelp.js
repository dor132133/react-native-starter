
import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer xdsDXWo2-FrVZtHq2cWVH1eqP6Tde06H89GGv9IdMpSaPgU9Wl1CtdPIOPDr_gf9XZ_ju_vD2tBaADjhC_tq_2sJNAYCnYEdF_f40fvxMUSSP0DaLBidTOi_ntW6XnYx'
    }
})



///GET https://api.yelp.com/v3/businesses/search
//GET https://api.yelp.com/v3/businesses/{id}