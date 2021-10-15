import React, {useCallback, useEffect, useState} from 'react'
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";

import {getAllProductsInfo} from "../controllers/productCotrollers";
import ProductCard from "./product/ProductCard";
import CustomCircularProgress from "./customized/CustomCircularProgress";
import {activateStoreMenu} from "../redux/common/menuStatus/actions";
import {selectUserInfo} from "../redux/common/userInfo/selectors";

const useStyles = makeStyles(() => {
    return {
        wrapper:{
            margin: 10,
            padding: 10,
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-around",
        }
    }
})

export default function Store() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);

    const [allProducts, setAllProducts] = useState([]);

    const getData = useCallback( async () => {
        try{
            const allProductsInfo = await getAllProductsInfo()
            setAllProducts(allProductsInfo);
        }catch (e) {
            console.log(e.message);
        }

    }, [setAllProducts])

    useEffect(() => {
        dispatch(activateStoreMenu());
        getData();

    }, [getData, dispatch, userInfo.isAuthenticated])

/*    useEffect( () => {
        console.log(allProducts)
    }, [allProducts])*/


    return (
        <div className={classes.wrapper}>
            {allProducts.length
                ? allProducts.map(elem => <ProductCard product={elem} key={elem.productID}/>)
                : <CustomCircularProgress />
            }
        </div>
    )
}