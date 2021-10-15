import React, {useCallback, useEffect, useState} from 'react'
import {makeStyles} from "@mui/styles";
import ProductCard from "../product/ProductCard";
import {getProductsForActiveUser} from "../../controllers/productCotrollers";
import {useDispatch, useSelector} from "react-redux";
import {selectRenderProject} from "../../redux/common/renderProject";
import {activateMyProductsMenu} from "../../redux/common/menuStatus/actions";

const useStyles = makeStyles(() => {
    return {
        wrapper:{
            border: '1px solid red',
            margin: 10,
            padding: 10,
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-around",
        },
        hint: {
            flex: '100%',
            display: "flex",
            justifyContent: "center"
        }
    }
})

export default function UserProducts() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const renderProject = useSelector(selectRenderProject);

    const [allProducts, setAllProducts] = useState([]);

    const getData = useCallback( async () => {
        try{
            const allProductsForActiveUser = await getProductsForActiveUser()
            setAllProducts(allProductsForActiveUser);
        }catch (e) {
            console.log(e.message);
        }

    }, [setAllProducts])

    useEffect(() => {
        dispatch(activateMyProductsMenu());
        getData();
    }, [getData, renderProject, dispatch])

    return (
        <div className={classes.wrapper}>
            {
                allProducts.length
                    ?allProducts.map(elem => <ProductCard product={elem} key={elem.productID}/>)
                    :(<div className={classes.hint}>
                        <h3 >You don`t have any course for sale.</h3>
                    </div>)
            }
        </div>
    )
}