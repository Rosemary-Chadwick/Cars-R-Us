
export const placedOrderList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const data = await response.json()

    return data.map(order => {
        const orderPrice = order.paint.price + order.interior.price + order.technology.price + order.wheel.price
//        const usdOrderPrice = orderPrice.toLocaleString("en-US",{style: "currency", currency: "USD"})

    return  `
        <div>                
            <article id="placedOrders" value="${order.id}">
                    Order Id #${order.id} is ${orderPrice.toLocaleString("en-US",{style: "currency", currency: "USD"})}
            </article>
        </div>
    `
    }).join('')
}

