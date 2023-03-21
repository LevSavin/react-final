import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import {useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import type {restaurantType, dishType} from "@/types/common"
import { setCartCount, setCart } from "@/redux/reducers/cartReducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";

const restaurantMock: restaurantType = {
  id: 1,
  title: "Чилим Seafood",
  image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  description: "РЫБА, МОРЕПРОДУКТЫ. Проект-привет с Дальнего Востока. Содержателен с точки зрения белков. Харизматичен, как магаданская креветка. Вызывает привыкание к гребешку, крабу и вонголе. Кормим, поим, доставляем. Из Японского моря прямо в ваши тарелки!"
}

const dishesMock: dishType[] = [
  {
    id: 1,
    title: "Креветки по-карибкси",
    description: "Королевские креветки, приготовленные по лучшим традициям карибсой кухни",
    image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 1000,
  },
  {
    id: 2,
    title: "Lorem ipsum",
    description: "Треска, приготовленная по лучшим традициям карибсой кухни",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 800,
  },
  {
    id: 3,
    title: "Lorem ipsum",
    description: "Треска, приготовленная по лучшим традициям карибсой кухни",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    price: 700,
  },
  {
    id: 4,
    title: "Lorem ipsum",
    description: "Треска, приготовленная по лучшим традициям карибсой кухни",
    image: "https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    price: 700,
  },
  {
    id: 5,
    title: "Lorem ipsum",
    description: "Треска, приготовленная по лучшим традициям карибсой кухни",
    image: "https://images.unsplash.com/photo-1619526881542-c81baff85fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 700,
  },
  {
    id: 6,
    title: "Lorem ipsum",
    description: "Треска, приготовленная по лучшим традициям карибсой кухни",
    image: "https://images.unsplash.com/photo-1621852003739-b54d49ff3431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80",
    price: 700,
  }
]

function CardComponent ({card}: {card: dishType}) {
  const count = useAppSelector(state => state.cartReducer.count)
  const cart = useAppSelector(state => state.cartReducer.cart)
  const dispatch = useAppDispatch()

  const addToCartHandle = () => {
    const cartItem = Object.assign({}, card); // костыли, удалить при появлении апи
    cartItem["quantity"] = 1;
    const newCart = [...cart, cartItem]
    dispatch(setCart(newCart));
    dispatch(setCartCount(count + 1));
  }

  return (
    <Card
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <div className="restaurant__card-image-wrapper">
        <img className="restaurant__card-image" src={card.image} alt={card.title}/>
      </div>
      <CardContent sx={{ flexGrow: 1 }}>
        <h2>
          {card.title}
        </h2>
        <Typography>
          {card.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="restaurant__card-add">
          <Button size="large" onClick={addToCartHandle}>Добавить</Button>
          <h3>{card.price} РУБ.</h3>
        </div>
      </CardActions>
    </Card>
  )
}

export default function Restaurant() {
  const navigate = useNavigate();
  const count = useAppSelector(state => state.cartReducer.count)
  // const { id } = useParams();
  const [restaurant, setRestaurant] = useState<restaurantType>({
    id: null,
    title: "",
    image: "",
    description: "",
  })

  const [dishes, setDishes] = useState<dishType[]>([])

  useEffect(() => {
    setRestaurant(restaurantMock);
    setDishes(dishesMock);
  }, []);

  const createOrder = () => {
    navigate(`${process.env.REACT_APP_REPO}/cart`);
  }
  
  return (
    <Box className="restaurant">
        <div className="restaurant__hero-image-wrapper">
          <img className="restaurant__hero-image" src={restaurant.image} alt={restaurant.title}/>
          <span className="restaurant__hero-title">{restaurant.title}</span>
        </div>
        
        <Container sx={{ mt: "64px", mb: "48px", px: "0px !important" }} maxWidth="xl">
          <h1 className="restaurant__title">Наши блюда</h1>
          <Grid container spacing={4}>
            {dishes.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
                <CardComponent card={card}></CardComponent>
              </Grid>
            ))}
          </Grid>
          { count > 0
            ? <Box sx={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
                <Button variant="contained" size="large" onClick={createOrder}>Оформить заказ</Button>
              </Box>
            : null
          }
        </Container>
    </Box>
  );
}
